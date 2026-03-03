# Frontend Architecture & Technical Design - Today I Eat

This document serves as a technical blueprint and architectural guide for the "Today I Eat" (Ăn Gì Đây?) frontend application. It is designed for developers, architects, and product owners to understand the underlying systems that power the premium user experience.

---

## 🏗 Core Design Philosophy

The application is built on three pillars:

1.  **Performance First**: Intelligent caching, lazy-loaded visual assets, and minimized re-renders.
2.  **Visual Excellence**: High-fidelity micro-animations and a design system that feels native, not web-based.
3.  **Contextual Intelligence**: Features that adapt to the user's current location, time, and environment.

## 🛠 Technology Stack

| Layer                    | Technology                 | Rationale                                                                            |
| :----------------------- | :------------------------- | :----------------------------------------------------------------------------------- |
| **Framework**            | React 19                   | Leveraging the latest concurrent rendering features and improved hydration.          |
| **Build System**         | Vite 5                     | Optimized for developer velocity and efficient production bundling.                  |
| **State Management**     | Context API + custom hooks | Provides a scalable way to handle global state (Auth, UI) without Redux boilerplate. |
| **Styling**              | Tailwind CSS + Shadcn/UI   | Atomic CSS for performance; Radix primitives for accessibility.                      |
| **Animation**            | Framer Motion              | Industry-standard for complex gesture-based animations (Modals, Roulettes).          |
| **Mapping & Geospatial** | Geolocation API            | Direct browser integration for zero-latency proximity checks.                        |

---

## 📂 System Directory Structure

- `src/components/`
  - `ui/`: Fundamental building blocks (atoms) following the Shadcn/UI pattern. Highly reusable and themeable.
  - `home/`: Logic-heavy sections of the landing page.
  - `layout/`: Persistent structural components (Navigation, Header, Footer).
- `src/hooks/`: **The Business Engine**.
  - `useRestaurants.ts`: Orchestrates API communication, pagination, and client-side filtering logic.
  - `useGeolocation.ts`: Manages browser permissions and coordinate streaming with fallback support.
  - `useAppUI.ts`: Controls global UI behaviors like greeting strings based on local time.
- `src/lib/`: Unified configuration for third-party SDKs (Firebase) and internal utilities (mapping, formatting).

---

## 🔄 Advanced State & Data Flow

### 1. The Strategy of Custom Hooks

Rather than bloating components with `useEffect` and `fetch` calls, business logic is encapsulated in custom hooks. This allows for:

- **Testability**: Logic can be tested independently of the UI.
- **Reusability**: Different views (e.g., Main Feed vs. Nearby Modal) can share the same data-fetching logic.

### 2. Context-Driven Sync

- **AuthContext**: Maintains a real-time reactive link with Firebase Auth.
- **ToastContext**: A centralized notification queue that prevents overlapping alerts and manages global feedback.

### 3. Visual Feedback Heuristics (`utils.ts`)

- **Distance-Aware Styling**: Components dynamically change color tokens based on proximity (Emerald for <1km, Blue for <2.5km, Orange for further).
- **Semantic Emojis**: An automated mapping system that assigns emojis based on restaurant metadata, enhancing visual scanning without extra server data.

---

## ✨ Performance Optimizations

- **LazyImage Component**: Prevents the browser from downloading images that aren't in the viewport, saving user bandwidth on mobile.
- **Debounced Search**: Typing in the Search Bar initiates an API call only after a 300ms pause, reducing server load and preventing UI jitter.
- **Single-Flight State Updates**: Uses React 19's transition capabilities to ensure heavy UI updates (like list filtering) don't lock the main thread.

## 🔗 Environment Integration

- **Vite Proxy**: In development, `/api` requests are proxied to a local Node.js server.
- **Firebase Firestore**: Used for storage of user-generated data, enabling a hybrid backend model (SQL-like MongoDB for the main database, NoSQL Firestore for user data).
