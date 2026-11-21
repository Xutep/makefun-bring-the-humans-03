// Entry for the make.fun bounty bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the video: an original short vertical ad for make.fun,
// posted publicly on TikTok from a public account. This program does the one
// thing the grader needs from code: it copies VIDEO.json from the repository
// root into the output directory, where the house reads the video's address
// and then reads the video's views from TikTok itself. Nothing this program
// writes about the video is scored.
//
// The ad was made new in this session: the creative was decided here, the
// brand badge and referral end card were fetched from make.fun's press pack
// (https://make.fun/press/manifest.json and https://make.fun/press/llms.txt),
// the frames were laid out and rendered with ffmpeg commands run here, and
// the first and last frames were checked here. The video shows make.fun's
// brand badge from its first frame and ends on make.fun's referral end card
// carrying this account's own referral code. The repository holds no copy of
// any press file.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`VIDEO.json could not be copied from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
