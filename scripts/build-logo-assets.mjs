/**
 * Membangun aset turunan dari public/logo.jpg.
 *
 * logo.jpg aslinya 1254x1254: mark-nya cuma 274px di tengah, sisanya kosong,
 * dan formatnya JPEG jadi tidak punya alpha. Script ini memotong ketat mark
 * dan wordmark-nya, mengangkat background navy jadi transparan, lalu menyusun
 * og-image + app icon.
 *
 * Jalankan ulang kalau logo.jpg diganti:  node scripts/build-logo-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "public", "logo.jpg");
const pub = (name) => join(root, "public", name);

/** Background logo, disampel dari keempat sudut — jadi ground seluruh situs. */
const BG = { r: 12, g: 19, b: 38 };
/** Di bawah jarak ini piksel dianggap noise JPEG → transparan penuh. */
const NOISE_FLOOR = 26;
/** Di atas jarak ini piksel dianggap opak penuh. */
const SOLID_AT = 62;

/** Bounding box hasil analisis, plus sedikit ruang napas. */
const MARK = { left: 484, top: 434, width: 286, height: 288 };
const WORDMARK = { left: 485, top: 745, width: 284, height: 51 };

const dist = (r, g, b) =>
  Math.sqrt((r - BG.r) ** 2 + (g - BG.g) ** 2 + (b - BG.b) ** 2);

/** Angkat background navy jadi alpha, sisakan warna asli piksel. */
async function cutout(region) {
  const { data, info } = await sharp(SRC)
    .extract(region)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const d = dist(data[i], data[i + 1], data[i + 2]);
    const a = Math.min(1, Math.max(0, (d - NOISE_FLOOR) / (SOLID_AT - NOISE_FLOOR)));
    data[i + 3] = Math.round(a * 255);
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function write(pipeline, name) {
  const info = await pipeline.png({ compressionLevel: 9 }).toFile(pub(name));
  console.log(`✓ public/${name}  ${info.width}x${info.height}`);
  return info;
}

const markPng = await cutout(MARK);
const wordPng = await cutout(WORDMARK);

await write(sharp(markPng), "logo-mark.png");
await write(sharp(wordPng), "logo-wordmark.png");

/* ---- og-image 1200x630: mark + wordmark di atas ground brand ---- */
{
  const H = 630;
  const W = 1200;
  const markH = 250;
  const markW = Math.round((MARK.width / MARK.height) * markH);
  const wordW = 470;

  const mark = await sharp(markPng).resize({ height: markH }).toBuffer();
  const word = await sharp(wordPng).resize({ width: wordW }).toBuffer();

  // garis merah tipis menyilang, mengikuti sudut bilah di logo
  const slash = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0" stop-color="#FF222F" stop-opacity="0"/>
           <stop offset="0.5" stop-color="#FF222F" stop-opacity="0.55"/>
           <stop offset="1" stop-color="#FF222F" stop-opacity="0"/>
         </linearGradient>
       </defs>
       <rect x="0" y="${H - 92}" width="${W}" height="1.5" fill="url(#g)"/>
     </svg>`
  );

  await write(
    sharp({
      create: {
        width: W,
        height: H,
        channels: 4,
        background: { ...BG, alpha: 1 },
      },
    }).composite([
      { input: mark, top: 118, left: Math.round((W - markW) / 2) },
      { input: word, top: 118 + markH + 46, left: Math.round((W - wordW) / 2) },
      { input: slash, top: 0, left: 0 },
    ]),
    "og-image.png"
  );
}

/* ---- app icon 512x512: mark saja, di atas ground brand ---- */
{
  const S = 512;
  const inner = await sharp(markPng).resize({ height: 340 }).toBuffer();
  const { width } = await sharp(inner).metadata();

  await write(
    sharp({
      create: {
        width: S,
        height: S,
        channels: 4,
        background: { ...BG, alpha: 1 },
      },
    }).composite([
      { input: inner, top: 86, left: Math.round((S - width) / 2) },
    ]),
    "../app/icon.png"
  );
}
