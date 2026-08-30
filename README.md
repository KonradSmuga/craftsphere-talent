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

## Future updates

Push changes to the `main` branch. Cloudflare will automatically rebuild and publish the website.
