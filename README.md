# SOMAS Public

Public SOMAS landing page built with Vite, React, TanStack Router, and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The production build is a static site in `dist/`. It does not require Nitro, a Node server, or TanStack Start runtime output.

## VPS Hosting

Serve the `dist/` directory with nginx, Caddy, Apache, or any static file server.

For SPA routing, configure unknown paths to fall back to `index.html`.

Example nginx location:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Verification

```bash
pnpm build
pnpm test
```

Use `pnpm` for package-manager commands in this project.
