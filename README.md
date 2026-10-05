# cyeta-web-mono

Monorepo for the Cyeta web presence. Yarn (v1) workspaces, two apps:

| Path      | Package     | What it is                                                                 |
| --------- | ----------- | -------------------------------------------------------------------------- |
| `apps/web` | `@cyeta/web` | Next.js 16 marketing site, statically exported (`output: 'export'`)          |
| `apps/cms` | `@cyeta/cms` | Sanity Studio 5 (content for the site)                                       |
| `apps/web/bff` | —        | DigitalOcean Functions backend for the contact form — see `apps/web/bff/README.md` |
| `docs/notes` | —         | Scratch/planning notes carried over from the CMS repo                       |

Both apps share the Sanity dataset `7vus9ews / production`.

## Commands

Run from the repo root (one lockfile, hoisted `node_modules`):

```bash
yarn install          # install everything
yarn dev:web          # Next.js dev server  -> http://localhost:3000
yarn dev:cms          # Sanity Studio dev server
yarn build            # build cms then web
yarn lint             # eslint in every workspace
yarn typecheck        # tsc --noEmit in every workspace
yarn typegen          # re-extract the schema, regenerate types, copy them into apps/web
```

Per-app overrides (`tsconfig`, eslint, prettier) stay inside each app — the two
apps intentionally use different formatting rules, so there is no root
prettier config. `yarn lint` is not run in CI: `apps/web` has 8 pre-existing
`react/no-unescaped-entities` errors and 2 unused-import warnings that predate
this repo (the old CI only built).

## Types

`apps/cms/schema.json` + `apps/cms/sanity.types.ts` are the source of truth;
`apps/web/src/types/sanity.types.ts` is a copy, kept in sync with
`yarn typegen` (`sanity schema extract` → `sanity typegen generate` →
`scripts/sync-types.mjs`).

> Caveat: the checked-in generated types predate sanity 5.10. Regenerating today
> makes every schema field optional (`?`) even though the schema marks it
> `required()`, which breaks `apps/web` typecheck (4 errors in
> `LatestProjects.tsx`) — so `yarn typegen` currently produces a diff that must
> be reconciled by tightening the web code or the typegen config, not committed
> blindly.

## Deploy

- **web**: `yarn build:web` produces `apps/web/out/`; hosted on DigitalOcean App
  Platform as `cyeta-web-g2aax.ondigitalocean.app`.
- **cms**: `yarn workspace @cyeta/cms deploy` (Sanity Studio deploy; appId is in
  `apps/cms/sanity.cli.ts`).
- **bff**: `cd apps/web/bff && doctl serverless deploy .` — see
  `apps/web/bff/README.md`.

> `apps/web/bff/do.key` is a DigitalOcean token committed to git (also in the
> imported history). Treat it as public and rotate it.

## History

This repo was assembled from `ilstor/cyeta-web` (was `master`) and
`ilstor/studio-cyeta-cms` (was `main`) with `git subtree add`, so the original
commits of both projects are intact in `git log`. `origin/feature/pages` from
the old web repo was not imported.
