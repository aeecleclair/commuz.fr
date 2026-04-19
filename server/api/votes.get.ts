// server/api/votes.get.ts

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const VOTES_FILE = resolve('./votes.ndjson');

export default defineEventHandler((event) => {
  if (!existsSync(VOTES_FILE)) return { votes: [], total: 0 };

  const query = getQuery(event);

  const votes = readFileSync(VOTES_FILE, 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map(line => {
      try { return JSON.parse(line); } catch { return null; }
    })
    .filter(Boolean)
    .filter(v => !query.person || v.chopeA === query.person || v.chopeB === query.person)
    .filter(v => !query.validay || v.validay === query.validay);

  return { votes, total: votes.length };
});
