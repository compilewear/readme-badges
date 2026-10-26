#!/usr/bin/env node
// Generates joke README badges as shields.io-compatible SVGs.
// Brand palette: #0b0e14 dark, #7ee787 accent — monospace text, obviously.
// Usage: node generate.mjs → badges/*.svg

import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(root, 'badges');

const LABEL_BG = '#0b0e14';
const LABEL_FG = '#7ee787';
const VALUE_BG = '#7ee787';
const VALUE_FG = '#06210f';

// DejaVu Sans Mono advance at 11px ≈ 6.63px per char; shields.io pads 5px per side.
const CHAR_W = 6.8;
const PAD = 10;

const badge = (label, value) => {
  const lw = Math.round(label.length * CHAR_W) + PAD * 2;
  const vw = Math.round(value.length * CHAR_W) + PAD * 2;
  const w = lw + vw;
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20" role="img" aria-label="${esc(label)}: ${esc(value)}">
  <title>${esc(label)}: ${esc(value)}</title>
  <clipPath id="r"><rect width="${w}" height="20" rx="3" fill="#fff"/></clipPath>
  <g clip-path="url(#r)">
    <rect width="${lw}" height="20" fill="${LABEL_BG}"/>
    <rect x="${lw}" width="${vw}" height="20" fill="${VALUE_BG}"/>
  </g>
  <g font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="11" text-anchor="middle">
    <text x="${(lw / 2).toFixed(1)}" y="14.5" fill="${LABEL_FG}">${esc(label)}</text>
    <text x="${(lw + vw / 2).toFixed(1)}" y="14.5" fill="${VALUE_FG}" font-weight="bold">${esc(value)}</text>
  </g>
</svg>`;
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const BADGES = [
  ['build', 'works on my machine'],
  ['coverage', 'undefined%'],
  ['merges', '--force'],
  ['tests', "it's fine"],
  ['prod', 'yolo'],
  ['docs', 'null'],
  ['review', 'lgtm'],
  ['deploys', 'friday 5pm'],
  ['bugs', 'features'],
  ['uptime', '127.0.0.1'],
  ['tech debt', 'increasing'],
  ['compiled', 'probably'],
];

await mkdir(OUT_DIR, { recursive: true });
const index = [];
for (const [label, value] of BADGES) {
  const name = `${slug(label)}-${slug(value)}`;
  await writeFile(path.join(OUT_DIR, `${name}.svg`), badge(label, value));
  index.push({ name, label, value });
  console.log(`  ✓ badges/${name}.svg`);
}

await writeFile(
  path.join(OUT_DIR, 'index.json'),
  JSON.stringify(index, null, 2) + '\n'
);
console.log(`Done — ${BADGES.length} badges in badges/`);
