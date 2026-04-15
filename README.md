# GEEKFUN Official Website
[![generate page site](https://github.com/geek-fun/geekfun-site/actions/workflows/page-site.yml/badge.svg)](https://github.com/geek-fun/geekfun-site/actions/workflows/page-site.yml)

GEEKFUN's official website is a VitePress-based marketing, documentation, and content site for the community and its open-source products.

## Local development

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start the VitePress dev server:
   ```bash
   npm run docs:dev
   ```
3. Open the local site in your browser and verify changes.

## Build for production

Generate the static site output with:

```bash
npm run docs:build
```

Preview the built site locally with:

```bash
npm run docs:preview
```

## Project structure

- `docs/` — all site content, including English and Chinese pages
- `docs/.vitepress/` — VitePress configuration, theme customizations, and shared components
- `docs/public/` — static assets, redirects, headers, and robots configuration
- `.github/workflows/` — CI and deployment workflow definitions

## Deployment

GitHub Actions builds the VitePress site and publishes the generated `dist/` output to Cloudflare Pages.

## Contributing

When updating the site, prefer small focused changes and always run `npm run docs:build` before opening a PR.

## License

Apache-2.0
