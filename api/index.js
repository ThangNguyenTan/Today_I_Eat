import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

// ─── Config ──────────────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const DB_NAME = "today-i-eat";
const COL_NAME = "restaurants";
const PORT = 3001;
const EXCLUDE_DRINKS = ["Trà Sữa", "Cà Phê"];

// ─── MongoDB client (Serverless Friendly) ────────────────────────────────────
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGO_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGO_URI);
  clientPromise = client.connect();
}

let collection;
let restaurantCache = null;
let lastCacheUpdate = 0;
let refreshPromise = null;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

async function ensureCache() {
  const now = Date.now();
  if (restaurantCache && now - lastCacheUpdate < CACHE_TTL) {
    return restaurantCache;
  }

  // Use a single-flight promise to prevent concurrent refreshes
  if (refreshPromise) return refreshPromise;

  refreshPromise = (async () => {
    try {
      if (!collection) {
        await clientPromise;
        collection = client.db(DB_NAME).collection(COL_NAME);
      }

      console.log("🔄 Starting restaurant cache refresh...");
      const start = Date.now();

      // OPTIMIZATION: Fetch only the fields we actually use to reduce network transfer time
      const projection = {
        name: 1,
        keyword: 1,
        cuisines: 1,
        categories: 1,
        position: 1,
        url: 1,
        photos: 1,
        "label.photos": 1,
        rating: 1,
        address: 1,
        location: 1,
        operating: 1,
        logo_mms_img_id: 1,
        restaurant_id: 1,
      };

      const docs = await collection.find({}, { projection }).toArray();
      const fetchTime = Date.now() - start;
      console.log(
        `📡 MongoDB fetch complete: ${docs.length} docs in ${fetchTime}ms`,
      );

      const transformStart = Date.now();
      const transformed = [];
      for (const d of docs) {
        try {
          transformed.push(transformRestaurant(d));
        } catch (e) {
          // Log specific errors for bad documents but don't break the whole cache
          console.warn(
            `⚠️ Failed to transform restaurant ${d.name || "unknown"}:`,
            e.message,
          );
        }
      }

      // Pre-sort by popularity
      transformed.sort((a, b) => b.popularityScore - a.popularityScore);

      restaurantCache = transformed;
      lastCacheUpdate = Date.now();
      console.log(
        `✅ Cache total time: ${Date.now() - start}ms (Fetch: ${fetchTime}ms, Transform: ${Date.now() - transformStart}ms)`,
      );
      return restaurantCache;
    } catch (err) {
      console.error("Failed to refresh cache:", err);
      return restaurantCache || [];
    } finally {
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

// (Utilities removed for performance)

/**
 * Computes if a restaurant is currently open based on pre-calculated total minutes.
 * Accounts for 24h wraps (e.g. 18:00 to 02:00).
 */
function isCurrentlyOpen(operating, currentTotalMinutes) {
  if (!operating?.openTotal && !operating?.closeTotal) return true;

  const { openTotal, closeTotal } = operating;
  if (closeTotal < openTotal) {
    // Overlap to next day (e.g. 18:00 to 02:00)
    return (
      currentTotalMinutes >= openTotal || currentTotalMinutes <= closeTotal
    );
  }
  return currentTotalMinutes >= openTotal && currentTotalMinutes <= closeTotal;
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
// Helper to parse complex review strings (e.g., "1.2k+", "500", "99")
function parseReviewCount(str) {
  if (!str) return 0;
  const s = String(str).toLowerCase();
  let num = parseFloat(s.replace(/[^0-9.]/g, "")) || 0;
  if (s.includes("k")) num *= 1000;
  return num;
}

/**
 * Maps a raw MongoDB document to the shape expected by the frontend.
 * Optimized: only camelCases necessary fields and pre-calculates scores.
 */
function transformRestaurant(doc) {
  // Use a shallow camelCase or manual mapping for better performance than deep recursive camelize
  const d = doc;

  const id =
    doc._id?.toString() ?? String(doc.restaurant_id ?? doc.id ?? Math.random());

  const keyword = d.keyword ?? "";
  const displayType = keyword
    ? keyword.charAt(0).toUpperCase() + keyword.slice(1)
    : (d.cuisines?.[0] ?? d.categories?.[0] ?? "Khác");

  const lat = d.position?.latitude;
  const lon = d.position?.longitude;
  const mapsUrl =
    lat && lon
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
      : (d.url ?? null);

  const thumbnail =
    pickPhoto(d.photos, 240) ||
    (d.label?.photos ? pickPhoto(d.label.photos, 240) : null);

  const ratingAvg = d.rating?.avg ?? 0;
  const reviews = parseReviewCount(d.rating?.display_total_review);
  // Pre-calculate popularity score: Rating + Logarithmic review boost
  const popularityScore = ratingAvg + Math.log10(reviews + 1) * 0.5;

  // Pre-calculate operating minutes for faster checking
  let operating = null;
  if (d.operating?.open_time && d.operating?.close_time) {
    const [oh, om] = d.operating.open_time.split(":").map(Number);
    const [ch, cm] = d.operating.close_time.split(":").map(Number);
    operating = {
      openTime: d.operating.open_time,
      closeTime: d.operating.close_time,
      openTotal: oh * 60 + om,
      closeTotal: ch * 60 + cm,
    };
  }

  const name = d.name ?? "Không có tên";
  const address = d.address ?? d.location ?? "";

  return {
    id,
    name,
    type: displayType,
    location: address,
    googleMapsUrl: mapsUrl,
    notes: null,
    mealTimes: deriveMealTimes(operating || d.operating),
    isFavorite: false,
    createdAt: Date.now(),
    rating: {
      avg: ratingAvg,
      displayTotalReview: d.rating?.display_total_review ?? "0",
    },
    position: d.position ?? null,
    photos: d.photos ?? [],
    thumbnailUrl: thumbnail,
    logoUrl: d.logo_mms_img_id
      ? `https://mms.img.susercontent.com/${d.logo_mms_img_id}@resize_w120`
      : null,
    cuisines: d.cuisines ?? [],
    categories: d.categories ?? [],
    operating,
    keyword: keyword,
    shopeeUrl: d.url ?? null,
    restaurantId: d.restaurant_id ?? null,

    // Performance optimizations: pre-calculate for searching/sorting
    popularityScore,
    _searchKey: `${name.toLowerCase()} ${address.toLowerCase()}`.trim(),
    _keywordLower: keyword.toLowerCase(),
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
  if (!operating) return ["Trưa", "Tối"];

  // Use pre-calculated minutes if available
  const openH =
    operating.openTotal !== undefined
      ? Math.floor(operating.openTotal / 60)
      : parseInt(operating.openTime?.split(":")[0] || "10", 10);
  const closeH =
    operating.closeTotal !== undefined
      ? Math.floor(operating.closeTotal / 60)
      : parseInt(operating.closeTime?.split(":")[0] || "22", 10);

  const times = [];
  if (openH < 10) times.push("Sáng");
  if (openH < 14 && closeH > 11) times.push("Trưa");
  if (closeH > 14) times.push("Chiều");
  if (closeH > 17) times.push("Tối");
  if (closeH > 21 || closeH < 4) times.push("Khuya");
  return times.length ? times : ["Trưa", "Tối"];
}

// ─── Express app ──────────────────────────────────────────────────────────────
const app = express();
app.use(cors());
app.use(express.json());

// Ensure DB connection for all API routes (Serverless Lazy Load)
app.use(async (req, res, next) => {
  try {
    if (!collection) {
      await clientPromise;
      collection = client.db(DB_NAME).collection(COL_NAME);
    }
    next();
  } catch (err) {
    console.error("DB Connection Error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

/**
 * GET /api/restaurants
 * Optimized with single-pass processing and in-memory cache.
 */
app.get("/api/restaurants", async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page ?? "1", 10));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit ?? "10", 10)),
    );
    const skip = (page - 1) * limit;

    const allTransformed = await ensureCache();

    // Calculate current Vietnam minutes once per request
    const now = new Date();
    const vnTime = new Date(
      now.getTime() + (now.getTimezoneOffset() + 420) * 60000,
    );
    const currentTotalMinutes = vnTime.getHours() * 60 + vnTime.getMinutes();

    // 1. Prepare Filter Params
    const type = req.query.type?.toLowerCase();
    const district = req.query.district?.toLowerCase();
    const q = req.query.q?.toLowerCase();
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);

    const hasLocation = !isNaN(lat) && !isNaN(lon);

    // 2. Filter, Calculate Distance, and Map in ONE Pass
    // This is much faster than multiple chained .filter().map().sort()
    let result = [];
    const count = allTransformed.length;

    for (let i = 0; i < count; i++) {
      const r = allTransformed[i];

      // Basic exclusions
      if (EXCLUDE_DRINKS.includes(r.type)) continue;

      // Dynamic Opening Status (Pre-calculated minutes for instant check)
      if (r.operating && !isCurrentlyOpen(r.operating, currentTotalMinutes))
        continue;

      // Filter matches (using pre-calculated lowercased keys)
      if (type && !r._keywordLower.includes(type)) continue;

      // For district and q, we check against the combined searchKey
      if (district && !r.location.toLowerCase().includes(district)) continue;
      if (q && !r._searchKey.includes(q)) continue;

      // Distance calculation (Show everything, no radius filter)
      let distanceKm = null;
      if (hasLocation) {
        if (r.position?.latitude && r.position?.longitude) {
          distanceKm = haversineKm(
            lat,
            lon,
            r.position.latitude,
            r.position.longitude,
          );
        } else {
          distanceKm = 9999; // Restaurants without position go to the end
        }
        result.push({ ...r, distanceKm });
      } else {
        result.push(r);
      }
    }

    // 3. Sort ONLY if sorting by distance (Popularity is pre-sorted in cache)
    if (hasLocation) {
      result.sort((a, b) => a.distanceKm - b.distanceKm);
    }

    const total = result.length;
    const restaurants = result.slice(skip, skip + limit);

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
  const type = req.query.type?.toLowerCase() || "";
  const limit = Math.min(
    50,
    Math.max(1, parseInt(req.query.limit ?? "20", 10)),
  );
  const page = Math.max(1, parseInt(req.query.page ?? "1", 10));
  const skip = (page - 1) * limit;

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ error: "lat and lon are required" });
  }

  try {
    const allTransformed = await ensureCache();
    const now = new Date();
    const vnTime = new Date(
      now.getTime() + (now.getTimezoneOffset() + 420) * 60000,
    );
    const currentTotalMinutes = vnTime.getHours() * 60 + vnTime.getMinutes();

    const filtered = allTransformed
      .filter((r) => {
        if (EXCLUDE_DRINKS.includes(r.type)) return false;
        if (r.operating && !isCurrentlyOpen(r.operating, currentTotalMinutes))
          return false;
        if (type && !r.keyword.toLowerCase().includes(type)) return false;
        if (!r.position?.latitude || !r.position?.longitude) return false;
        return true;
      })
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

    const results = filtered.slice(skip, skip + limit);
    res.json({ restaurants: results, total: filtered.length, page, limit });
  } catch (err) {
    console.error("GET /api/restaurants/nearby error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/restaurants/random?mealTime=Trưa
 * Returns a single random restaurant, optionally filtered by meal time.
 * Only returns restaurants currently in operating hours.
 */
app.get("/api/restaurants/random", async (req, res) => {
  try {
    const allTransformed = await ensureCache();
    const now = new Date();
    const vnTime = new Date(
      now.getTime() + (now.getTimezoneOffset() + 420) * 60000,
    );
    const currentTotalMinutes = vnTime.getHours() * 60 + vnTime.getMinutes();

    const openCandidates = allTransformed.filter((r) => {
      if (EXCLUDE_DRINKS.includes(r.type)) return false;
      return isCurrentlyOpen(r.operating, currentTotalMinutes);
    });

    if (openCandidates.length === 0) {
      return res.status(404).json({ error: "No open restaurants found" });
    }

    res.json(openCandidates[Math.floor(Math.random() * openCandidates.length)]);
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

// ─── Boot / Export ────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 API server running locally at http://localhost:${PORT}`);
  });
}

export default app;
