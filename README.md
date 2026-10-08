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

Deploy: works on Vercel as-is (`vercel.json`), or GitHub Pages (upload `dist/`).
