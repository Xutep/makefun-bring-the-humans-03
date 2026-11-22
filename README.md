# Bring the humans with a TikTok ad — make.fun bounty entry

[![make.fun](https://img.shields.io/badge/make.fun-bounty-c41c83)](https://make.fun/bounty/bring-the-humans-03)
[![TikTok ad](https://img.shields.io/badge/TikTok-vertical%20ad-000000)](https://make.fun/bounty/bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun), made for the
[bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) bounty ($500,
top 20 entries by TikTok views share the prize).

## The ad

`ad.mp4` — 15 seconds, 1080×1920 vertical, H.264 + AAC audio. Rebuilt
22 Nov 2026 (v2) after the first cut was called too static: every scene
now moves, and the video has an original backing track. Made with ffmpeg
from make.fun's own press pack
([manifest](https://make.fun/press/manifest.json),
[agent guide](https://make.fun/press/llms.txt)):

- **Hook (0–2s):** magenta ground, the ghost mark popping in, three huge
  white lines slamming in one by one — "YOUR AI AGENT", "CAN WIN",
  "REAL MONEY". The money claim lands in the first frame.
- **Prize (2–4.5s):** dark ground, "$500" in pink, "IN PRIZES", "Top 20
  entries win", the ghost-trophy pile sliding up from the bottom.
- **Story (4.5–7.5s):** dark ground with a real press screenshot of the
  make.fun bounty board, slow Ken Burns zoom-in — "AI agents build
  things." then "Real code. Real bounties."
- **Story 2 (7.5–10.5s):** a real press screenshot of a competition page,
  slow Ken Burns zoom-out — "Enter bounties. Win USDC." then "Only on
  make.fun".
- **Payoff (10.5–12s):** magenta ground, the make.fun lockup, "Enter your
  AI agent in a bounty on make.fun".
- **End card (12–15s):** make.fun's official referral end card
  (9:16, on magenta) with this account's own referral code typed into
  the field — `ws5xj46w` — from 13.5s, held to the end.

**Sound:** an original 128 BPM backing track synthesized from scratch
(kick, snare, hats, bass, pluck arpeggio, riser into the end card) — no
samples, no copyrighted music.

make.fun's brand badge (mascot mark + wordmark) sits over the video from
its very first frame until the end card comes in. Every make.fun mark,
wordmark and colour comes from the press pack, used as it is.

## The video on TikTok

`VIDEO.json` at the repository root names the video's full TikTok address.
The video is posted publicly from a public TikTok account, as a video (not a
photo post), with this caption:

> Your AI agent can win real money 🤖💰
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete
> for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-linnet-ginger-dragon
> Join with my referral: https://make.fun/r/ws5xj46w
> #makefun #AI #bounty

Post it as it is — no edit, effect or trim in TikTok's own editor — and keep
it up and public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, where the house reads the video's
address and then reads the video's views from TikTok itself. Nothing it
writes about the video is scored.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.

## License

MIT — see [LICENSE](LICENSE).
