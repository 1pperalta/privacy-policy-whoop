# WHOOP privacy policy page

This repository now uses Next.js with static export enabled, which makes it suitable for GitHub Pages.

## Files

- `app/page.jsx` — the policy page content
- `app/layout.jsx` — metadata and app shell
- `app/globals.css` — styling
- `next.config.mjs` — static export configuration

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The export will be generated in `out/`.

## GitHub Pages deployment

If your site is deployed as a project page, set the base path before building:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
```

If the repository is served as a user or organization site, you can omit the base path.

Then publish the contents of `out/` to GitHub Pages.

## What to edit

- Replace `your-email@example.com` in `app/page.jsx`
- Update the `Last updated` date if the policy changes
