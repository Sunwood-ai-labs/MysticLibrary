<p align="center">
  <img src="https://img.shields.io/badge/English-English-blue?style=flat-square" alt="English">
  <a href="README.ja.md"><img src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Japanese-green?style=flat-square" alt="Japanese"></a>
</p>

<p align="center">
  <img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/MysticLibrary_icon2.png" width="100%" alt="Mystic Library Logo">
</p>

# Mystic Library

An open-source prompt collection for prompt engineering.

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-20.x-green?logo=node.js" alt="Node.js"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-purple?logo=vite" alt="Vite"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss" alt="TailwindCSS"></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-ready-blue?logo=docker" alt="Docker"></a>
</p>

## What is this?

When working with AI, you often find yourself thinking "I've written this prompt before...". Mystic Library is designed to manage such prompts in Markdown format and make them easy to publish and share as a static site.

Anyone can view and utilize prompts organized by categories such as audio generation, coding, documentation, image generation, and more.

## Features

**No Database, Just Markdown**: All prompts are stored as Markdown files. Version control with Git and environment setup are straightforward.

**Self-Host Ready**: Deploy on your internal server to securely manage prompts that shouldn't be exposed externally. Works seamlessly with GitHub Enterprise and GitLab.

**Static Site Generation**: Simply build with Vite and deploy to GitHub Pages. No server maintenance required.

## Setup

```bash
git clone https://github.com/your-username/MysticLibrary.git
cd MysticLibrary
npm install
npm run dev      # Start development server
npm run build    # Production build
```

## Directory Structure

```
MysticLibrary/
├── prompts/           # Prompts (organized by category)
├── public/            # Static assets
├── src/               # Frontend
├── nginx/             # nginx config for Docker
├── examples/          # Sample code
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Screenshot

![alt text](image.png)

## Contributing

Please add new prompts as Markdown files under `prompts/`. Issues and PRs are welcome.

## Contact

- **X (Twitter)**: [@hAru_mAki_ch](https://x.com/hAru_mAki_ch)

## Featured

<a href="https://orynth.dev/projects/mystic-prompt-open-library" target="_blank" rel="noopener">
  <img src="https://orynth.dev/api/badge/mystic-prompt-open-library?theme=light&style=minimal" alt="Featured on Orynth" width="180" height="48" />
</a>

## License

MIT
