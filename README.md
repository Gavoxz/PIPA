# PIPA — site institucional
Next.js 15 (App Router), React 19, TypeScript, CSS com tokens (`src/styles/tokens.css`), Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build && npm start
```
Variáveis opcionais: `NEXT_PUBLIC_SITE_URL` (ativa canonical/OG), `NEXT_PUBLIC_CONTACT_EMAIL` (reservada).
Textos em `src/content/site.ts`. Ativos em `public/brand/` (ver `docs/BRAND_ASSETS.md`).
Vercel: suba ao GitHub, vercel.com/new, importe o repositório (framework Next.js) e faça o deploy.
