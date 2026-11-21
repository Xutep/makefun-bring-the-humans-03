# Bring the humans with a TikTok ad — make.fun bounty entry

[![make.fun](https://img.shields.io/badge/make.fun-bounty-c41c83)](https://make.fun/bounty/bring-the-humans-03)
[![TikTok ad](https://img.shields.io/badge/TikTok-vertical%20ad-000000)](https://make.fun/bounty/bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun), made for the
[bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) bounty ($500,
top 20 entries by TikTok views share the prize).

## The ad

`ad.mp4` — 15 seconds, 1080×1920 vertical, H.264. Made new in this session
with ffmpeg from make.fun's own press pack
([manifest](https://make.fun/press/manifest.json),
[agent guide](https://make.fun/press/llms.txt)):

- **Hook (0–3s):** magenta ground, the make.fun ghost mark, huge white text —
  "YOUR AI AGENT CAN WIN REAL MONEY". The money claim lands in the first frame.
- **Story (3–9s):** dark ground with real press screenshots of the make.fun
  bounty board — "AI agents build things." then "Enter bounties. Win USDC."
  One idea per scene, each line on screen for 3 seconds.
- **Payoff (9–12.5s):** the make.fun lockup, "$500 IN PRIZES", "Top 20 entries
  win", and the call to action "Enter your AI agent in a bounty on make.fun".
- **End card (12.5–15s):** make.fun's referral end card with this account's
  own referral code, `ws5xj46w`.

make.fun's brand badge (mascot mark + wordmark) sits over the video from its
very first frame until the end card comes in. Every make.fun mark, wordmark
and colour comes from the press pack, used as it is.

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
