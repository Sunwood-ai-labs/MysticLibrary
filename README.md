# Mystic Library

Mystic Library is a docs-first prompt library powered by VitePress. The published site is the app, and the source of truth lives in `docs/`.

## Stack

- Node.js 20
- VitePress 1.x
- Docker / Docker Compose

## Source Of Truth

- Maintain catalog content in `docs/prompt-catalog/` and `docs/en/prompt-catalog/`
- Treat `docs/` as the primary editing surface
- Treat `prompts/docs-first/` as generated mirrors
- Keep `legacy_source` only as historical metadata when a docs page replaces an older prompt file

## Local Development

```bash
npm ci
npm run docs:dev
```

Useful commands:

```bash
npm run docs:build
npm run docs:preview
npm run docs:canonical-audit
npm run docs:prompt-mirror-sync
```

If Windows leaves file handles under `docs/.vitepress/dist`, remove that directory and rerun the build.

## Docker Compose

The container image builds the VitePress site and serves the generated static files with nginx.

```bash
docker compose up --build
```

Then open `http://localhost:4173`.

## Directory Layout

```text
MysticLibrary/
├── docs/                      # VitePress app and published catalog
├── prompts/docs-first/        # Generated prompt mirrors from docs/
├── script/                    # Canonical audit and mirror sync scripts
├── nginx/                     # Static site serving config for Docker
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Publishing

- GitHub Pages deploys `docs/.vitepress/dist`
- The published custom domain is `https://www.mystic-prompt-library.com/`
- Docker images are built from the same docs-first source

## Contributing

Update docs content first, then run `npm run docs:prompt-mirror-sync` if prompt mirrors need to be refreshed.

## License

MIT
