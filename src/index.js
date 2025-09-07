import express from 'express';
import { basicMatch } from './lib/basic.js';
import nurses from '../sample_data/nurses.json' assert { type: 'json' };

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/match', (req, res) => {
  const q = req.body || {};
  const results = basicMatch(q, nurses);
  res.json({ count: results.length, results });
});

app.listen(PORT, () => console.log('Basic Filter listening on :' + PORT));
