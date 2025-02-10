# Recipe API

This API provides access to a collection of recipes with filtering, sorting, and pagination options. Additionally, it allows retrieving a list of all available ingredients.

## Available Endpoints

### 1. Get Recipes
**Endpoint:** `GET /recipes`

**Description:** Retrieves a list of recipes with optional filtering, sorting, and pagination.

**Query Parameters:**
- `page` (integer, optional) - The page number (default: 1).
- `limit` (integer, optional) - Number of recipes per page (default: 10).
- `sortBy` (string, optional) - Field to sort by (`createdAt`, `duration`).
- `order` (string, optional) - Sorting order (`asc` or `desc`, default: `asc`).
- `level` (string, optional) - Filter by difficulty level (`beginner`, `intermediate`, `advanced`).
- `tags` (string, optional) - Comma-separated list of tags to filter recipes.
- `ingredients` (string, optional) - Comma-separated list of ingredients to filter recipes.

**Example Request:**
```
GET /recipes?page=2&limit=5&sortBy=duration&order=desc&level=beginner
```

**Response Example:**
```json
{
  "total": 50,
  "page": 2,
  "limit": 5,
  "items": [
    {
      "id": 6,
      "name": "Spaghetti Carbonara",
      "description": "A classic Italian pasta dish...",
      "createdAt": "2023-02-10T10:15:30Z",
      "duration": 25,
      "level": "beginner",
      "ingredients": ["Pasta", "Eggs", "Parmesan", "Bacon"]
    }
  ]
}
```

---

### 2. Get All Ingredients
**Endpoint:** `GET /ingredients`

**Description:** Retrieves a list of all available ingredients used in the recipes.

**Example Request:**
```
GET /ingredients
```

**Response Example:**
```json
{
  "ingredients": ["Tomato", "Garlic", "Olive Oil", "Chicken", "Basil"]
}
```

---

## Running the API
To run the API locally:
1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Access endpoints via `http://localhost:3332`

