# Project Overview & Architecture: Ăn Gì Đây

## Mission Statement

Develop a mobile-first, AI-powered food recommendation and restaurant search application tailored for users in Vietnam. The system utilizes a Retrieval-Augmented Generation (RAG) architecture to match user personality profiles and quiz outputs against a vectorized database of Vietnamese cuisine and restaurant data.

## 1. Architectural Environment & Tech Stack

**Frontend Workspace:**

- **Framework:** React with TypeScript, Vite build tool.
- **Styling:** TailwindCSS, shadcn/ui.
- **State & Routing:** Context API / Zustand, React Router.
- **Design Paradigm:** Strict Mobile-First UI.

**Backend Workspace:**

- **Language & Framework:** Java 21, Spring Boot 3.x.
- **Architecture:** Layered Architecture (Controller -> Service -> Repository).
- **AI Integration:** Spring AI for LLM orchestration and embedding generation.
- **Data Ingestion:** Batch processing for CSV parsing and vectorization.

**Database & Infrastructure:**

- **Primary Datastore:** PostgreSQL.
- **Extensions:** `pgvector` for embedding storage and semantic search; `PostGIS` (optional) or Haversine formula for geospatial sorting.
- **Environment:** Docker Compose for local orchestration.
