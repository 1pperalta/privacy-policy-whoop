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

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:

1. In your GitHub repository, open `Settings` → `Pages`.
2. Set the source to `GitHub Actions`.
3. Push your code to `main`.
4. Wait for the workflow to finish.

GitHub will publish the static export from `out/` automatically.

## What to edit

- Replace `your-email@example.com` in `app/page.jsx`
- Update the `Last updated` date if the policy changes
