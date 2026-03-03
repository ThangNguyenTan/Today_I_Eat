# Product Experience & Feature Suite - Today I Eat

"Today I Eat" (Ăn Gì Đây?) is a premium food discovery platform built to bridge the gap between "indecision" and "satisfaction." This document outlines the user-facing features and their underlying business value.

---

## 💎 Core Value Proposition

- **Frictionless Discovery**: Minimize the steps from opening the app to seeing high-quality food options.
- **Visual Trust**: Using high-quality imagery and a clean interface to build confidence in recommendations.
- **Local Intelligence**: Features that are deeply aware of Vietnam's geography and dining culture.

---

## 🌟 Premium Features

### 1. The Decision Roulette (Smart Randomizer)

The ultimate solution for "Decision Fatigue."

- **Business Logic**: Unlike a blind randomizer, the roulette only selects from restaurants that are **currently open** and filtered by your current search criteria.
- **Experience**: A high-fidelity animated wheel powered by physical simulation logic (Framer Motion).
- **Outcome**: A single, focused recommendation presented in a "Winning" modal to simplify the choice.

### 2. AI-Powered "Hidden Gem" Highlights

Every restaurant card features "AI Highlights" that generate a concise story for the establishment.

- **Dynamic Content**: The logic analyzes the restaurant's rating, review volume, and cuisine type to generate a 3-point highlight reel.
- **High Trust**: Flags restaurants as "High Rated" or "Community Favorite" based on raw data.
- **Visual Scanning**: Allows users to understand the "Vibe" of a place in less than 2 seconds without reading long reviews.

### 3. Hyper-Local Search & Filtering

A specialized search engine for the local Vietnamese landscape.

- **District-Specific Discovery**: Deep integration with Saigon's district system (Quận 1, Quận 3, Thủ Đức, etc.).
- **Smart Category Mapping**: Intelligent mapping of local strings (e.g., "Phở," "Bún bò," "Ốc") to visual icons and categorized results.
- **Proximity Ranking**: Uses precision Geolocation to tell you exactly how many meters you are from your next meal.

### 4. Interactive "Nearby" Explore Mode

A dedicated context-aware modal for users who want immediate results within walking or short driving distance.

- **Radius Filtering**: Automatically limits results to a 5km radius to ensure relevance.
- **Visual Proximity Cues**: Distance markers are color-coded (Green for close walking distance, Blue for short commute, Orange for further) to guide user behavior.

### 5. Community Contribution (Add Restaurant)

Users can actively grow their personal ecosystem.

- **Custom Entry**: Add a "Secret Spot" or a local family-run shop that might not be on major platforms.
- **Cloud Sync**: All user-added restaurants are backed up to the cloud and synced across devices via Google Login.
- **Personal Feed Integration**: User restaurants are seamlessly blended into search results, treated with the same visual polish as database restaurants.

---

## 📱 Mobile-First User Experience (UX)

- **One-Handed Operation**: All primary actions (Search, Filter, Roulette) are located within the "Thumb Zone" via a responsive Bottom Navigation bar.
- **Pull-to-Refresh Gesture**: A custom-built, physics-based refresh interaction that rewards the user with smooth visual feedback.
- **Lazy Visual Assets**: Images and UI elements fade in gracefully, ensuring the app feels "Alive" and premium even on slower mobile connections.
- **Glassmorphism & Micro-animations**: Subtle use of blur effects and hover states to create a high-end "App Store" feel in a web environment.

---

## � Integrated Ecosystem

- **Direct Navigation**: "One-Tap" routing to Google Maps with pre-configured search queries.
- **Direct Delivery Links**: Seamless handoff to ShopeeFood/Foody for instant ordering.
- **Smart Status System**: Automatically filters out shops that are closed at the time of browsing, preventing user disappointment.
