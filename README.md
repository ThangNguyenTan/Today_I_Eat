# Ăn Gì Đây? (What to Eat?) 🍜

A production-ready, mobile-first web application to help you decide what to eat in Vietnam.

## Features

- **Mobile-First Design**: Optimized for a seamless experience on smartphones.
- **Restaurant Management**: Add your favorite local spots with food type, location, and notes.
- **Smart Suggestion**: Feeling indecisive? Click "Ăn gì bây giờ?" and let the app pick a restaurant for you!
- **Local Storage**: Your data stays on your device (no backend required).
- **Modern UI**: Built with shadcn/ui and TailwindCSS for a premium feel.

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for fast builds
- **TailwindCSS** for styling
- **Radix UI** primitives (shadcn/ui compatible)
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v18.15.0 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone or download the project.
2. Open your terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```
The build artifacts will be in the `dist/` folder.

## Project Structure

- `src/components`: UI components (Button, Input, Card, etc.) and feature-specific components.
- `src/hooks`: Custom React hooks (e.g., `useRestaurants` for LocalStorage).
- `src/lib`: Utility functions (e.g., class merging).
- `src/types`: TypeScript interfaces.
- `src/App.tsx`: Main application entry point.

## License

MIT
