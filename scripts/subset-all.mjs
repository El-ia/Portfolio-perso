import { readFile, writeFile, mkdir } from 'node:fs/promises';
import subsetFont from 'subset-font';

// Ranges utiles (ASCII + accents FR + guillemets + tirets + ellipses)
const UNICODE_RANGES = [
  'U+0020-007E',       // ASCII
  'U+00A0',            // espace insécable
  'U+00A9',            // ©
  'U+00AB','U+00BB',   // « »
  'U+00C0-00FF',       // accents
  'U+2010-2015',       // ‐ – —
  'U+2018-201F',       // ‘ ’ “ ” …
  'U+2026'             // …
];

function buildTextFromRanges(ranges) {
  const out = [];
  for (const token of ranges) {
    const r = token.match(/^U\+([0-9A-F]{4,6})-([0-9A-F]{4,6})$/i);
    const s = token.match(/^U\+([0-9A-F]{4,6})$/i);
    if (r) {
      const a = parseInt(r[1], 16);
      const b = parseInt(r[2], 16);
      for (let cp = a; cp <= b; cp++) out.push(String.fromCodePoint(cp));
    } else if (s) {
      out.push(String.fromCodePoint(parseInt(s[1], 16)));
    }
  }
  if (!out.includes(' ')) out.push(' ');
  return out.join('');
}

const TEXT = buildTextFromRanges(UNICODE_RANGES);

async function makeSubset(src, out) {
  await mkdir('public/fonts', { recursive: true });
  const fontBuffer = await readFile(src);
  const subsetBuffer = await subsetFont(fontBuffer, TEXT, { targetFormat: 'woff2' });
  await writeFile(out, Buffer.from(subsetBuffer));
  console.log(`✔ Subset créé: ${out}`);
}

(async () => {
  await makeSubset('src/assets/fonts/SF-Pro.ttf',           'public/fonts/SFPro-Regular.woff2');
  await makeSubset('src/assets/fonts/SF-Pro-Italic.ttf',    'public/fonts/SFPro-Italic.woff2');
  await makeSubset('src/assets/fonts/SFPRODISPLAYBOLD.ttf', 'public/fonts/SFPro-Bold.woff2');
})().catch((e) => { console.error('Erreur subset:', e); process.exit(1); });