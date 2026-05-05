# GEEKFUN Official Website

[![generate page site](https://github.com/geek-fun/geekfun-site/actions/workflows/page-site.yml/badge.svg)](https://github.com/geek-fun/geekfun-site/actions/workflows/page-site.yml)

**[GEEKFUN](https://www.geekfun.club)** is a sustainable open-source community, building tools for developers who ship. Built in public, engineered for the long term.

This repository is the official website — a VitePress-powered marketing, documentation, and content site for the community and its open-source products.

## Products

| Product | Description |
|---------|-------------|
| **[DocKit](https://www.geekfun.club/products/dockit/)** | AI-native NoSQL GUI — write queries in natural language, manage Elasticsearch, OpenSearch, and DynamoDB |
| **[SqlKit](https://www.geekfun.club/products/sqlkit/)** | Open-source SQL client built for shipping — PostgreSQL, MySQL, SQL Server, SQLite |
| **[ServerlessInsight](https://serverlessinsight.com/)** | Vendor-neutral serverless infrastructure platform for Alibaba Cloud, Tencent Cloud, and Volcengine |
| **[serverless-adapter](https://github.com/geek-fun/serverless-adapter)** | Serverless adapter for Express and Koa with automatic provider detection |
| **[jest-search](https://github.com/geek-fun/jest-search)** | Jest preset for search integration testing — boots local Elasticsearch, OpenSearch, and ZincSearch |
| **[AnyTerm](https://github.com/geek-fun/AnyTerm)** | Lightweight SSH client and terminal for Mac, Windows, and Linux |

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
