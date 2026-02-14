import { readdirSync } from "node:fs";
import { resolve } from "pathe";

export function getPublicImages(folder: string) {
  const dir = resolve(process.cwd(), "public", folder);

  return readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
    .map((file) => `/${folder}/${file}`);
}
