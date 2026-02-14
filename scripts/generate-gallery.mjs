import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { writeFileSync } from "node:fs";

const dir = resolve("public/galerie/2024");

const images = readdirSync(dir)
  .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
  .map((f) => `/galerie/2024/${f}`);

writeFileSync(
  "assets/generated/galerie-2024.json",
  JSON.stringify(images, null, 2)
);
