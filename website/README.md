# PowerMem Website

Official website for [PowerMem](https://github.com/oceanbase/powermem) — Persistent, self-evolving memory for AI agents.

Built with [VitePress](https://vitepress.dev/).

## Development

```bash
npm install
npm run docs:dev
# → http://localhost:5173
```

## Build

```bash
npm run docs:build
# Output: .vitepress/dist/
```

## Preview build locally

```bash
npm run docs:preview
```

## Structure

```
website/
├── .vitepress/          # VitePress config + theme
├── guide/               # English documentation
├── zh/                  # Chinese documentation
│   └── guide/
├── public/              # Static assets (logo, favicon)
├── index.md             # English homepage
└── package.json
```
