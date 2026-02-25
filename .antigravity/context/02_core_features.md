# Core Feature Specifications

## Feature 1: Restaurant Search & Filtering (Deterministic)

Standard CRUD and complex querying operations for the restaurant directory.

- **Search Engine:** Implement text-based search on the `name` and `foodType` columns using `ILIKE` or PostgreSQL Full-Text Search.
- **Filtering Parameters:**
  - `location` (District/City exact match or geospatial bounding box).
  - `foodType` (Categorical filtering: Phở, Cơm, Lẩu, Chay).
- **Sorting Mechanisms:**
  - `rating` (Descending order).
  - `distance` (Calculate distance from the user's provided latitude/longitude to the restaurant's coordinates).
- **Favorites System:**
  - Implement a `User_Favorite_Restaurants` join table mapping `user_id` to `restaurant_id`.
  - Endpoints: `POST /favorites/{id}` (Add), `DELETE /favorites/{id}` (Remove), `GET /favorites` (List).

## Feature 2: AI "Ăn Gì?" Recommendation Engine (Probabilistic/RAG)

This feature bridges user psychology with the vector database to output highly contextualized suggestions.

- **Input Vectors:**
  - _User Personality:_ Persisted psychological profile linked to the logged-in user account.
  - _Quiz Output:_ Ephemeral state data representing immediate cravings or mood.
  - _Randomization:_ An entropy factor injected to ensure variety.
- **The Execution Flow:**
  1. **Context Construction:** The Spring Boot backend receives the personality and quiz outputs.
  2. **Query Vectorization:** Pass the combined context string to the embedding model to create a query vector.
  3. **Semantic Search:** Execute a cosine similarity search (`<=>`) in PostgreSQL (`pgvector`) to retrieve the top 5 `Restaurant` records matching the query vector.
  4. **LLM Synthesis:** Pass the retrieved database records and the user's context to the LLM. Instruct the LLM to select the best match from the 5 options and generate a personalized 1-sentence justification.
  5. **Output:** Return the structured JSON containing the single recommended restaurant and the AI's reasoning.
