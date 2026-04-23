// server/api/vote.post.ts
//
// Append-only NDJSON log — one JSON object per line.
// - No read on write: appendFile just adds a line at the end → fast
// - Concurrency safe: appendFile is atomic for small writes on Linux
// - Scalable: file grows linearly, reading is a simple line-split
 
import { appendFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
 
// In Docker: /app/data/votes.ndjson (mounted volume, set via env)
// In local dev: <project>/data/votes.ndjson
const VOTES_FILE = process.env.VOTES_FILE ?? resolve('./data/votes.ndjson');
 
// Create the directory if it doesn't exist yet (first boot, fresh volume, local dev)
mkdirSync(dirname(VOTES_FILE), { recursive: true });
 
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { validay, chopeA, chopeB, timestamp } = body ?? {};
 
  if (!['yes', 'no'].includes(validay) || !chopeA || !chopeB || !timestamp) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid payload' });
  }
 
  const line = JSON.stringify({ validay, chopeA, chopeB, timestamp }) + '\n';
  appendFileSync(VOTES_FILE, line, 'utf-8');
 
  return { ok: true };
});
 
