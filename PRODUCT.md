# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — evaluating developers (global and Chinese-speaking).** Working developers, DevOps engineers, and SREs at the point of choosing a database client or serverless tool for their stack. They arrive from search, GitHub, or community channels to evaluate open-source alternatives, understand what a tool does, judge whether it is battle-tested, and download it. Typically at work, comparing tools against proprietary and open-source options.

**Secondary audiences, confirmed by existing content but not primary drivers:**
- Existing product users returning for docs, downloads, and updates.
- Potential open-source contributors evaluating the community's mission and projects.
- Community members reading blog and news content.

## Product Purpose

GEEKFUN is a sustainable open-source community that builds tools for developers who ship. This repository is the official website — a VitePress-powered marketing, documentation, and content hub for the community and its open-source products (DocKit, SqlKit, Data Studio Agent, ServerlessInsight, and related utilities).

The site's primary job for a first-time visitor is **discovery and download of products**: product landing pages lead. The site is optimized toward product downloads as the success metric, while still carrying documentation, blog/news, and community content. The community positions itself as "built in public, engineered for the long term" — the site must make that durability and professionalism legible.

## Positioning

A sustainable, community-owned open-source studio building **AI-native data tools** — not a vendor dumping free tiers, not a generic dev-tool aggregator. GEEKFUN's claim is that its tools (e.g., DocKit's natural-language querying via Agentic Data Studio; SqlKit's AI-powered SQL client across 40+ databases) are professional, privacy-first, and built to last, maintained by a community that cares about quality. The adjacent claim a copycat could not truthfully make: a full suite of open-source, AI-native data tooling shipped by one sustainable community over the long term.

## Operating Context

- Visitors evaluate the site at work, usually on desktop, often late in the day; dark mode is the primary reading environment, light mode for docs and browsing.
- Site is fully bilingual: English at the root, Chinese under `/zh/`. The EN/ZH split is a first-class product decision, not translation.
- Static VitePress site; content lives in `docs/`, theme customization in `docs/.vitepress/`. Built via GitHub Actions and published to Cloudflare Pages; deployed from the generated `dist/` output.
- Local dev: `npm run docs:dev`; production build: `npm run docs:build` (must pass before PRs).

## Capabilities and Constraints

- **Products with site presence:** DocKit (AI-native NoSQL GUI — MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch; Agentic Data Studio for natural-language queries), SqlKit (AI-powered SQL client for 40+ databases), Data Studio Agent (product page under `docs/products/data-studio-agent/`), ServerlessInsight (serverless infrastructure platform, separate domain serverlessinsight.com), serverless-adapter (Express/Koa serverless adapter), jest-search (Jest preset for search integration testing), AnyTerm (lightweight cross-platform SSH client).
- Static site, no backend: downloads link to external release channels; content is markdown + VitePress components.
- License: Apache-2.0. Community contact: support@geekfun.club.
- **Homepage lineup priority (decided 2026-08-08):** Data Studio Agent is the featured lead product on the home surface, followed by the download products DocKit and SqlKit, then the remaining utilities. No longer undecided.

## Brand Commitments

- Names: **GEEKFUN** (English), **极客范** (Chinese).
- Voice: developer-to-developer, technical, opinionated, open — "no fluff." Not marketing-to-user.
- Primary brand color: orange `#f89b40`; accent purple `#bd34fe` used in gradients only. Dark-first theme with near-black backgrounds.
- Legacy design context file `.impeccable.md` at repo root records the incumbent visual direction (references: linear.app, raycast.com, stripe.com; anti-references: generic AI-startup templates). Treated as committed context, not to be silently replaced.

## Evidence on Hand

- README.md — product list and positioning statements.
- .impeccable.md — users, brand personality, voice, and incumbent visual commitments.
- docs/.vitepress/config.mts — site metadata, bilingual structure, search, social links (GitHub, X, YouTube).
- docs/index.md, docs/about.md, docs/products/* — live copy and product claims currently shipped.
- Existing content: EN + ZH home, about, download, products, blog, news, and DocKit docs.
- Absent: no published testimonials, download numbers, contributor counts, or funding/deployment claims in the repo — future work must not fabricate these.

## Product Principles

1. **Product discovery leads.** First-time visitors should find, evaluate, and download tools quickly; marketing surfaces serve the product lineup, not decoration.
2. **Durability reads as trust.** The site must make the community's long-term, built-in-public commitment legible; professionalism and sustainability are the emotional case.
3. **Developer-to-developer honesty.** Technical, direct copy with no marketing fluff; claims must stay truthful to shipped reality.
4. **Bilingual by design, not by translation.** EN and ZH are first-class; typography, spacing, and layout decisions must hold for both.
5. **Accessibility is baseline.** WCAG 2.1 AA minimum; semantic markup, visible focus, proper contrast — non-negotiable on every surface.

## Accessibility & Inclusion

- WCAG 2.1 AA minimum contrast (4.5:1 text), visible focus indicators on all interactive elements, semantic heading hierarchy and landmarks.
- Must hold across both locales and both color modes.
