/**
 * D-0211 — Bold navy-tile favicons for readable browser tabs.
 * Solid #0b1220 square + falcon mark with padding (badge look, not tiny transparent mark).
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const markPath = join(root, "public/brand/saven-logo-mark.webp");
const NAVY = { r: 11, g: 18, b: 32, alpha: 1 }; // #0b1220

async function renderBadge(size, padRatio) {
  const pad = Math.max(1, Math.round(size * padRatio));
  const inner = Math.max(1, size - pad * 2);
  // Trim transparent padding from the source mark so the falcon fills the tile.
  const trimmed = await sharp(markPath)
    .trim({ threshold: 8 })
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([{ input: trimmed, gravity: "centre" }])
    .png()
    .toBuffer();
}

/** Modern ICO: embed PNG payloads (Vista+). */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + count * 16;
  for (const png of pngBuffers) {
    const width = png.readUInt32BE(16);
    const height = png.readUInt32BE(20);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }
  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function writePng(rel, buffer) {
  const path = join(root, rel);
  await sharp(buffer).png().toFile(path);
  console.log("wrote", rel, buffer.length);
}

const sizes = {
  // Tab icons: bold navy tile + large mark fill (readable at 16–48px).
  fav16: await renderBadge(16, 0.06),
  fav32: await renderBadge(32, 0.07),
  fav48: await renderBadge(48, 0.07),
  fav64: await renderBadge(64, 0.08),
  icon192: await renderBadge(192, 0.08),
  icon512: await renderBadge(512, 0.08),
  // Maskable needs safer inset for OS masks.
  maskable: await renderBadge(512, 0.18),
  apple: await renderBadge(180, 0.08),
};

await writePng("public/favicon-16x16.png", sizes.fav16);
await writePng("public/favicon-32x32.png", sizes.fav32);
await writePng("public/favicon-48x48.png", sizes.fav48);
await writePng("public/icons/icon-64.png", sizes.fav64);
await writePng("public/icons/icon-192.png", sizes.icon192);
await writePng("public/icons/icon-512.png", sizes.icon512);
await writePng("public/icons/icon-512-maskable.png", sizes.maskable);
await writePng("public/icons/apple-touch-icon.png", sizes.apple);
await writePng("app/icon.png", sizes.icon512);
await writePng("app/apple-icon.png", sizes.apple);

const ico = buildIco([sizes.fav16, sizes.fav32, sizes.fav48, sizes.fav64]);
writeFileSync(join(root, "public/favicon.ico"), ico);
writeFileSync(join(root, "app/favicon.ico"), ico);
console.log("wrote public/favicon.ico + app/favicon.ico");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">
  <!-- D-0211 navy-tile badge favicon; raster master at /icons/icon-512.png -->
  <rect width="512" height="512" fill="#0b1220"/>
  <image width="512" height="512" xlink:href="/icons/icon-512.png"/>
</svg>
`;
writeFileSync(join(root, "public/favicon.svg"), svg);
console.log("wrote public/favicon.svg");
console.log("D-0211 favicon badge generation complete.");
