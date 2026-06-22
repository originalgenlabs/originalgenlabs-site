# Original Gen Labs

Production website for [originalgenlabs.com](https://originalgenlabs.com), built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

The site is designed for zero-configuration deployment on Vercel. It does not use a database, authentication, analytics, cookies, or paid services.

## OAuth

SkyPad's public OAuth client metadata lives at:

`/apps/skypad/oauth/client-metadata.json`

The production metadata values were migrated from SkyPad's existing working OAuth configuration. Keep the app's `OAuthConfig.swift`, this metadata file, and the production domain in sync when OAuth settings change.
Official website for Original Gen Labs.
