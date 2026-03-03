# Ăn Gì Đây? (Today I Eat) 🍜

A premium, mobile-first food discovery platform designed to solve the "indecision" and "satisfaction" gap. Built with a modern hybrid architecture of React, Node.js, MongoDB, and Firebase.

---

## 🌟 Key Features

- **Decision Roulette (The Smart Randomizer)**: Let the app pick for you! It only selects from options that are currently **open** and matches your search criteria.
- **Hyper-Local Discovery**: Precision geolocation to find food within walking or short driving distance.
- **Search & Filter**: Find your favorite Vietnamese dishes (Phở, Bún bò, Ốc, etc.) by type, name, or specific district.
- **Community Contributions**: Add your own "Hidden Gems" or family-run spots that are missing from the main database.
- **Cloud Sync**: Secure Google Authentication and real-time data sync with Firebase Firestore.
- **Visual Intelligence**: Automated "AI Highlights" that summarize a restaurant's vibe and quality in 3 points.

## 🛠 Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite 5](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **UI System**: [Shadcn/UI](https://ui.shadcn.com/) (built on Radix UI)
- **Backend API**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database) (Global index), [Firebase Firestore](https://firebase.google.com/products/firestore) (User data)
- **Authentication**: [Firebase Auth](https://firebase.google.com/products/auth) (Google Social Login)
- **Deployment**: Optimized for [Vercel](https://vercel.com/) (Frontend + Serverless Functions)

## 📂 Documentation

For detailed technical and product architecture, please refer to the `docs/` folder:

- [Frontend Architecture](./docs/FE_ARCHITECTURE.md)
- [Backend Engine & APIs](./docs/BE_FEATURES_APIS.md)
- [Product Experience & Features](./docs/PRODUCT_FEATURES.md)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.15.0 or higher
- **npm**: v9 or higher
- **MongoDB**: A running MongoDB instance or MongoDB Atlas cluster.
- **Firebase Project**: A Firebase project with Auth and Firestore enabled.

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables by creating a `.env` file in the root based on the following template:

    ```env
    # Firebase Frontend Config
    VITE_FIREBASE_API_KEY=...
    VITE_FIREBASE_AUTH_DOMAIN=...
    VITE_FIREBASE_PROJECT_ID=...
    VITE_FIREBASE_STORAGE_BUCKET=...
    VITE_FIREBASE_MESSAGING_SENDER_ID=...
    VITE_FIREBASE_APP_ID=...

    # Backend Config
    MONGO_URI=mongodb+srv://...
    NODE_ENV=development
    ```

### Running the App

To run both the **Frontend** and the **Backend API** in development mode:

**Run the API server:**

```bash
npm run dev:server
```

**Run the Frontend:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📦 Project Structure

- `src/`: React frontend source code.
  - `components/`: UI and feature components.
  - `hooks/`: Business logic and data fetching orchestration.
  - `context/`: Global state management.
  - `lib/`: Configuration and utility libraries.
- `api/`: Node.js/Express backend source code.
- `docs/`: In-depth project documentation.

## 📜 License

MIT
