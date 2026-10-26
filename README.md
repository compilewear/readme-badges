# readme-badges

Joke [shields.io](https://shields.io)-style badges for developer READMEs. Because `build: passing` was never honest anyway.

From the people behind [compilewear.com](https://compilewear.com) — apparel for people who ship.

## The badges

| Badge | Markdown |
|---|---|
| ![build: works on my machine](badges/build-works-on-my-machine.svg) | `![build](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/build-works-on-my-machine.svg)` |
| ![coverage: undefined%](badges/coverage-undefined.svg) | `![coverage](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/coverage-undefined.svg)` |
| ![merges: --force](badges/merges-force.svg) | `![merges](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/merges-force.svg)` |
| ![tests: it's fine](badges/tests-it-s-fine.svg) | `![tests](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/tests-it-s-fine.svg)` |
| ![prod: yolo](badges/prod-yolo.svg) | `![prod](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/prod-yolo.svg)` |
| ![docs: null](badges/docs-null.svg) | `![docs](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/docs-null.svg)` |
| ![review: lgtm](badges/review-lgtm.svg) | `![review](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/review-lgtm.svg)` |
| ![deploys: friday 5pm](badges/deploys-friday-5pm.svg) | `![deploys](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/deploys-friday-5pm.svg)` |
| ![bugs: features](badges/bugs-features.svg) | `![bugs](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/bugs-features.svg)` |
| ![uptime: 127.0.0.1](badges/uptime-127-0-0-1.svg) | `![uptime](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/uptime-127-0-0-1.svg)` |
| ![tech debt: increasing](badges/tech-debt-increasing.svg) | `![tech debt](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/tech-debt-increasing.svg)` |
| ![compiled: probably](badges/compiled-probably.svg) | `![compiled](https://cdn.jsdelivr.net/gh/compilewear/readme-badges@main/badges/compiled-probably.svg)` |

The jsdelivr URLs are free, cached, and update when the repo does — drop them into any README and they just work.

## Make your own

Edit the `BADGES` list in `generate.mjs`, then:

```sh
node generate.mjs   # zero dependencies, writes badges/*.svg
```

Each badge is a shields.io-compatible flat SVG: dark label segment + accent value segment, monospace text.

## License

MIT — go put `prod: yolo` in your README.
