# Craftsphere Talent

Production website for [craftspheretalent.com](https://craftspheretalent.com), built with Next.js, Vinext and Cloudflare Workers.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validate a production build

```bash
npm run build
```

## Cloudflare Workers Builds

Connect this repository in **Cloudflare → Workers & Pages → Create application → Import a repository**.

Use these settings:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Root directory: `/`

The Worker name must remain `craftsphere-talent`, matching `wrangler.jsonc`.

After the first successful deployment, add both custom domains in the Worker settings:

- `craftspheretalent.com`
- `www.craftspheretalent.com`

Set the root domain as the primary address and redirect `www` to it.

## Private CV page

`/cv/<token>` shows Konrad's CV without the site navigation. It is not linked anywhere,
not in the sitemap, marked `noindex`, has no analytics, and returns a plain 404 for any
token that isn't configured. The original PDF is served from `/cv/<token>/pdf` behind the
same check (the file lives in `app/cv/_assets/`, not in `public/`).

Set the tokens in **Cloudflare → Workers → craftsphere-talent → Settings → Variables and Secrets**
as a secret named `CV_TOKENS`, a comma-separated list. Labels before a colon are optional reminders:

```
acme:9f2c4b1e7a6d3f80b5c2a1d4,linkedin:4e8a1c9b2d7f6a3e0c51b8e2
```

Generate a token (at least 16 characters) with:

```bash
node -e "console.log(require('crypto').randomBytes(12).toString('hex'))"
```

The link to share is `https://craftspheretalent.com/cv/<token>`. Remove a token from the
list to switch that link off. Content is in `app/cv/[token]/page.tsx`.

For local development put the same line in a `.dev.vars` file (never commit it).

## Future updates

Push changes to the `main` branch. Cloudflare will automatically rebuild and publish the website.
