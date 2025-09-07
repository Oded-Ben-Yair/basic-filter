# Basic Filter

**One endpoint:** `POST /match`

## Run
```bash
npm install
cp .env.example .env
npm start
```

## Test
```bash
curl -s -X POST http://localhost:5001/match -H "content-type: application/json" -d '{
  "city": "Tel Aviv",
  "service": "Wound Care",
  "start":"2025-07-28T09:00:00Z",
  "end":"2025-07-28T12:00:00Z",
  "lat":32.0853, "lng":34.7818, "radiusKm":20, "topK":3
}'
```

## Database Integration

The service supports optional database integration with PostgreSQL or MongoDB. By default, it uses the JSON file at `sample_data/nurses.json`.

### Configuration

Configure database settings in your `.env` file:

```bash
# Enable database (default: false)
USE_DB=true

# Database type: postgres or mongo (default: postgres)
DB_KIND=postgres

# PostgreSQL connection
DATABASE_URL=postgres://user:pass@host:5432/wondercare

# MongoDB connection (if using mongo)
MONGODB_URI=mongodb://user:pass@host:27017
MONGODB_DB=wondercare
MONGODB_COLLECTION=nurses
```

### Health Check

Check database connection status:

```bash
curl -s http://localhost:5001/db/health
```

Returns:
- `{"ok":true,"probe":{...}}` when database is connected
- `{"ok":false,"reason":"USE_DB=false"}` when using JSON fallback
- `{"ok":false,"error":"..."}` on connection errors

### Setup Instructions

See [docs/DB_SETUP.md](docs/DB_SETUP.md) for detailed database setup instructions including:
- PostgreSQL schema and migration scripts
- MongoDB document structure
- Sample data seeding
- Index creation for performance

### Fallback Behavior

When `USE_DB=false` or database connection fails, the service automatically falls back to the JSON file, ensuring zero-downtime operation.
