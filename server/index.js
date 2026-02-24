import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

// ─── Config ──────────────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = "today-i-eat";
const COL_NAME = "restaurants";
const PORT = 3001;

// ─── MongoDB client (singleton) ───────────────────────────────────────────────
const client = new MongoClient(MONGO_URI);
let collection;

async function connect() {
  await client.connect();
  collection = client.db(DB_NAME).collection(COL_NAME);
  console.log(`✅ Connected to MongoDB: ${DB_NAME}.${COL_NAME}`);
}

// ─── snake_case → camelCase transformer ──────────────────────────────────────
function toCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Recursively converts all object keys from snake_case to camelCase.
 * Arrays are iterated element-by-element.
 */
function camelizeKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(camelizeKeys);
  }
  if (obj !== null && typeof obj === "object" && !(obj instanceof Date)) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [toCamel(k), camelizeKeys(v)]),
    );
  }
  return obj;
}

/**
 * Maps a raw MongoDB document to the shape expected by the frontend.
 * The output is already camelCased thanks to camelizeKeys().
 *
 * Frontend Restaurant type fields:
 *   id, name, type, location, googleMapsUrl, notes, mealTimes,
 *   isFavorite, createdAt,
 *   + new rich fields: rating, photos, position, cuisines, categories,
 *     isOpen, operating, promotionGroups, keyword, url (shopee), logoUrl
 */
function transformRestaurant(doc) {
  // First deep-camelize everything from Mongo
  const d = camelizeKeys(doc);

  // Derive a stable string id from the Mongo ObjectId
  const id =
    doc._id?.toString() ?? String(doc.restaurantId ?? doc.id ?? Math.random());

  // Decide the display "type" — prefer keyword (Phở, Bún, …), fallback to cuisine/category
  const keyword = d.keyword ?? "";
  const displayType = keyword
    ? keyword.charAt(0).toUpperCase() + keyword.slice(1) // capitalize
    : (d.cuisines?.[0] ?? d.categories?.[0] ?? "Khác");

  // Build a Google Maps deep-link using the restaurant's coordinates (if available)
  // or fall back to the ShopeeFood URL
  const lat = d.position?.latitude;
  const lon = d.position?.longitude;
  const mapsUrl =
    lat && lon
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
      : (d.url ?? null);

  // Pick the best thumbnail (≈240px wide)
  const thumbnail = pickPhoto(d.photos, 240) ?? pickPhoto(d.label?.photos, 240);

  return {
    // ── Core (matches existing frontend Restaurant interface) ──────────────
    id,
    name: d.name ?? "Không có tên",
    type: displayType,
    location: d.address ?? d.location ?? "",
    googleMapsUrl: mapsUrl,
    notes: null, // MongoDB schema has no "notes" yet
    mealTimes: deriveMealTimes(d.operating),
    isFavorite: false, // managed by Firebase, not Mongo
    createdAt: Date.now(),

    // ── Rich new fields ────────────────────────────────────────────────────
    rating: d.rating ?? null,
    position: d.position ?? null, // { latitude, longitude }
    photos: d.photos ?? [],
    thumbnailUrl: thumbnail,
    logoUrl: d.logoMmsImgId
      ? `https://mms.img.susercontent.com/${d.logoMmsImgId}@resize_w120`
      : null,
    cuisines: d.cuisines ?? [],
    categories: d.categories ?? [],
    isOpen: d.isOpen ?? true,
    operating: d.operating ?? null,
    promotionGroups: d.promotionGroups ?? [],
    keyword: d.keyword ?? "",
    shopeeUrl: d.url ?? null,
    restaurantId: d.restaurantId ?? null,
  };
}

/** Picks the photo whose width is closest to targetW */
function pickPhoto(photos, targetW) {
  if (!Array.isArray(photos) || photos.length === 0) return null;
  const sorted = [...photos].sort(
    (a, b) => Math.abs(a.width - targetW) - Math.abs(b.width - targetW),
  );
  return sorted[0]?.value ?? null;
}

/**
 * Rough heuristic: map operating window to meal-time labels.
 * open_time / close_time are "HH:MM:SS" strings.
 */
function deriveMealTimes(operating) {
  if (!operating?.openTime || !operating?.closeTime) return ["Trưa", "Tối"];
  const open = parseInt(operating.openTime.split(":")[0], 10);
  const close = parseInt(operating.closeTime.split(":")[0], 10);
  const times = [];
  if (open < 10) times.push("Sáng");
  if (open < 14 && close > 11) times.push("Trưa");
  if (close > 14) times.push("Chiều");
  if (close > 17) times.push("Tối");
  if (close > 21 || close < 4) times.push("Khuya");
  return times.length ? times : ["Trưa", "Tối"];
}

// ─── Express app ──────────────────────────────────────────────────────────────
const app = express();
app.use(cors());
app.use(express.json());

/**
 * GET /api/restaurants
 * Query params:
 *   page     (default 1)
 *   limit    (default 20, max 100)
 *   type     (keyword filter, case-insensitive)
 *   district (district/address substring, case-insensitive)
 *   q        (full-text search on name + address)
 *   lat, lon, radiusKm  (geospatial — filters by position if all three provided)
 */
app.get("/api/restaurants", async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page ?? "1", 10));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit ?? "20", 10)),
    );
    const skip = (page - 1) * limit;

    const filter = {};

    // Keyword / food-type filter
    if (req.query.type) {
      filter.keyword = { $regex: req.query.type, $options: "i" };
    }

    // District / area substring
    if (req.query.district) {
      filter.address = { $regex: req.query.district, $options: "i" };
    }

    // Full-text search on name & address
    if (req.query.q) {
      filter.$or = [
        { name: { $regex: req.query.q, $options: "i" } },
        { address: { $regex: req.query.q, $options: "i" } },
      ];
    }

    const [docs, total] = await Promise.all([
      collection.find(filter).skip(skip).limit(limit).toArray(),
      collection.countDocuments(filter),
    ]);

    // Transform + optional client-side distance filter
    let restaurants = docs.map(transformRestaurant);

    // Geospatial filter (post-transform, using position.latitude/longitude)
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);
    const radiusKm = parseFloat(req.query.radiusKm ?? "5");
    if (!isNaN(lat) && !isNaN(lon)) {
      restaurants = restaurants
        .filter((r) => r.position?.latitude && r.position?.longitude)
        .map((r) => ({
          ...r,
          distanceKm: haversineKm(
            lat,
            lon,
            r.position.latitude,
            r.position.longitude,
          ),
        }))
        .filter((r) => r.distanceKm <= radiusKm)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    }

    res.json({ restaurants, total, page, limit });
  } catch (err) {
    console.error("GET /api/restaurants error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/restaurants/nearby?lat=&lon=&radiusKm=5&limit=20
 * Dedicated endpoint: scans ALL docs with a valid position and returns
 * those within radiusKm, sorted by distance.
 * This is efficient for the NearbyModal because we skip pagination.
 */
app.get("/api/restaurants/nearby", async (req, res) => {
  const lat = parseFloat(req.query.lat);
  const lon = parseFloat(req.query.lon);
  const radiusKm = parseFloat(req.query.radiusKm ?? "5");
  const limit = Math.min(
    50,
    Math.max(1, parseInt(req.query.limit ?? "20", 10)),
  );

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: "lat and lon are required" });
  }

  try {
    // Only fetch docs that have a position (reduces scan dramatically)
    const docs = await collection
      .find({ "position.latitude": { $exists: true, $ne: null } })
      .toArray();

    const results = docs
      .map(transformRestaurant)
      .filter((r) => r.position?.latitude && r.position?.longitude)
      .map((r) => ({
        ...r,
        distanceKm: haversineKm(
          lat,
          lon,
          r.position.latitude,
          r.position.longitude,
        ),
      }))
      .filter((r) => r.distanceKm <= radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, limit);

    res.json({ restaurants: results, total: results.length });
  } catch (err) {
    console.error("GET /api/restaurants/nearby error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/restaurants/random?mealTime=Trưa
 * Returns a single random restaurant, optionally filtered by meal time.
 */
app.get("/api/restaurants/random", async (req, res) => {
  try {
    const filter = {};
    // No meal-time field in Mongo schema — could derive from operating hours
    const [count] = await Promise.all([collection.countDocuments(filter)]);
    const skip = Math.floor(Math.random() * count);
    const doc = await collection.find(filter).skip(skip).limit(1).next();
    if (!doc) return res.status(404).json({ error: "No restaurants found" });
    res.json(transformRestaurant(doc));
  } catch (err) {
    console.error("GET /api/restaurants/random error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/restaurants/count
 * Returns total count for the frontend subtitle.
 */
app.get("/api/restaurants/count", async (_req, res) => {
  try {
    const total = await collection.countDocuments({});
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ─── Haversine (server-side for /nearby) ─────────────────────────────────────
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 API server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
