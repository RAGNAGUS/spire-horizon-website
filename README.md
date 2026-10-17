# Spire Horizon — official website

One-page site for Spire Horizon (Vue 3 + Vite + Tailwind), meant for `spirehorizon.mendoka.com`.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ (also writes dist/404.html so any path falls back to the page)
```

| What | Where |
|---|---|
| Links (Steam, socials, EULA…), features, regions, gallery, trailer | `src/data/site.js` |
| Colors and fonts ("sunny meadow" theme) | `tailwind.config.js` |
| Page sections | `src/components/sections/*.vue` |
| Images and gameplay clips | `public/media/` |

Gameplay clips in `public/media/clips/` were cut from `Documents/Video` and re-encoded small (720p, no sound).
They only play while on screen.

Deploy: Cloudflare Pages (see Hosting below).

## Hosting: Cloudflare Pages

Lives in `E:\_Game\MendokaStudio\web\spire-horizon` (its own repo; the studio's other sites sit beside it).
Connected to Cloudflare Pages: build command `npm run build`, output `dist`, `NODE_VERSION=22`, domain `sh.mendoka.com`.
`public/_headers` sets the security headers and long caching of `assets/`. One page: unknown paths are a 404
The GitHub Pages workflow is gone (2026-10-18); `vercel.json` is gone too.


