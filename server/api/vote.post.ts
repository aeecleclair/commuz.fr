// server/api/vote.post.ts

import { appendFileSync } from 'fs';
import { resolve } from 'path';

const VOTES_FILE = resolve('./votes.ndjson');

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
