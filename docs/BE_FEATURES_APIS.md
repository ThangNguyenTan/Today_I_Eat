# Backend Engine & API Architecture - Today I Eat

This document describes the server-side architecture and data processing logic that powers the "Today I Eat" (Ăn Gì Đây?) ecosystem. It bridges the gap between raw data storage and high-performance API delivery.

---

## 🏗 Backend Architecture

- **Runtime**: Node.js (Express.js)
- **Deployment Strategy**: Vercel Serverless Functions.
- **Data Persistence**:
  - **Primary**: MongoDB (Global restaurant index).
  - **Secondary**: Firebase Firestore (User-specific data - handled directly by FE but integrated into the business logic).

---

## 🧠 Core Intelligence & Business Logic

### 1. Data Transformation Pipeline

The backend does not merely serve raw database rows. Every restaurant document passes through a transformation layer that:

- **Normalizes Schema**: Maps heterogeneous MongoDB keys to a strictly typed frontend Interface.
- **Smart Thumbnail Selection**: Analyzes available photo arrays and picks the image with a resolution closest to 240px wide to optimize mobile mobile data usage.
- **Heuristic Labeling**: Automatically categorizes restaurants into meal times (Sáng, Trưa, Tối, etc.) by analyzing their opening and closing hours.

### 2. Popularity Scoring Algorithm

To ensure the "best" results appear first in the defaults, every restaurant receives a `popularityScore`:
$$Score = \text{RatingAvg} + ( \log_{10}(\text{ReviewCount} + 1) \times 0.5 )$$
_This formula rewards both quality (high stars) and social proof (high review volume) while preventing extremely popular places from totally overshadowing smaller "Hidden Gems."_

### 3. Precision Opening Status

The engine maintains a precise real-time synchronization with Vietnam (GMT+7). It handles complex operating windows:

- **Standard**: 8:00 AM - 10:00 PM.
- **Cross-Midnight**: 6:00 PM - 3:00 AM (The logic correctly identifies these as "Open" when accessed at 1:00 AM).

---

## ⚡ Performance Optimization (Caching Strategy)

### The Single-Flight In-Memory Cache

- **Latency Reduction**: Instead of querying MongoDB on every request (which can take 200ms-500ms), the server maintains an in-memory cache of the entire dataset.
- **TTL (Time To Live)**: 10 minutes.
- **Atomic Refresh**: Uses a "single-flight" promise pattern to prevent multiple concurrent requests from triggering multiple database refreshes (preventing "cache stampede").
- **Results**: API response times are typically under **20ms** when serving from the cache.

---

## 📡 API Reference

### `GET /api/restaurants`

The primary discovery endpoint. Supports complex query orchestration.

- **Logic**: Filters out niche categories like "Tea/Coffee" by default to focus on meal-based food discovery.
- **Sorting**: Prioritizes results by distance if `lat`/`lon` are provided; otherwise, falls back to the `popularityScore`.

### `GET /api/restaurants/nearby`

A high-precision geospatial endpoint.

- **Logic**: Performs a full-pass Haversine distance check on the cached dataset and returns only items within the specified `radiusKm`.

### `GET /api/restaurants/random`

The core engine for the "Decision Roulette."

- **Logic**: Dynamically filters for restaurants that are **currently open** before picking a random candidate to ensure a valid user experience.

---

## 🛠 Deployment & Scalability

- **Serverless Migration**: Designed to run as stateless Vercel functions.
- **MongoDB Atlas Interaction**: Uses the native MongoDB driver for connection pooling efficiency.
- **CORS Config**: Strictly managed to allow only authorized frontend domains while permitting local development.
