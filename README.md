<<<<<<< HEAD
# basic-filter
=======
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
>>>>>>> 0c3cbb0 (chore: initial commit)
