# Project Overview & Architecture: Ăn Gì Đây

## Mission Statement
Develop a premium, mobile-first, AI-powered food recommendation and restaurant search application. The system utilizes an **Agentic/Hybrid Retrieval-Augmented Generation (RAG)** architecture. The AI operates as an autonomous agent that dynamically uses semantic search tools to match user profiles against a vectorized database of Vietnamese cuisine, delivering high-fidelity experiences natively in the user's preferred language.

## 1. Architectural Environment & Tech Stack

### Frontend Workspace
* **Framework:** React 19 with TypeScript, Vite 5 build tool.
* **Styling & UI:** TailwindCSS, shadcn/ui. Distance-aware styling applies dynamic color tokens (Emerald, Blue, Orange) based on proximity.
* **Animation:** Framer Motion for complex gesture-based animations (Modals, Roulettes).
* **State & Routing:** Context API / Zustand, React Router.
* **Localization Integration:** `react-i18next`. The frontend intercepts outgoing HTTP requests to attach the global state's active language via the `Accept-Language` header.
* **Design Paradigm:** Strict Mobile-First UI featuring one-handed thumb-zone operation and pull-to-refresh gestures.

### Backend Workspace (Modern Java 21 + Spring Boot 3.x)

The backend is structured as a **Gradle Multi-Module project** rooted in the `an-gi-server` directory, strictly isolating deployment configurations from the core application.
* **Module 1 (`an-gi-server/deployment/`):** Contains the infrastructure footprint, including `docker-compose.yml` and containerization tasks.
* **Module 2 (`an-gi-server/app/`):** Contains the Spring Boot 3.x backend organized via Clean Architecture (`domain`, `application`, `infrastructure`, `presentation`).
* **Language & Framework:** Java 21, Spring Boot 3.x.
* **Concurrency Model:** **Java 21 Virtual Threads** (`spring.threads.virtual.enabled=true`).
* **Architecture Rules:** DTOs and Domain Entities utilize **Java 21 Records** optimized for nested JSON deserialization.
* **Caching Strategy:** Spring Cache (e.g., Caffeine) implementing a single-flight in-memory cache with a 10-minute TTL to prevent cache stampedes.
* **Localization (i18n) Engine:** Spring `MessageSource` with an `AcceptHeaderLocaleResolver`.
* **Authentication:** OAuth2 via Firebase Authentication (Google provider).
* **AI Integration:** Spring AI configured for Agentic RAG using the modern fluent `ChatClient` API and `@Bean` Function Calling (Tools).

### Database & Infrastructure
* **Primary Datastore:** PostgreSQL.
* **Schema Management:** Liquibase for robust database migration, version control, and automated schema deployment.
* **Extensions:** `pgvector` (semantic search), `pg_trgm` (fuzzy text searching), `PostGIS` (geospatial sorting).
* **Environment:** Docker Compose.