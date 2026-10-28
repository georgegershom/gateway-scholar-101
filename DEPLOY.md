# Gateway Scholar Deployment

## Source of truth: GitHub `main`

The live site (gateway-scholar-101.vercel.app) is built automatically by Vercel
from the `main` branch of github.com/georgegershom/gateway-scholar-101.

**To update the site:** commit to `main` (or merge a pull request). Vercel runs
the build in `vercel.json` and publishes it within about a minute.

**Do NOT run `vercel deploy` / `vercel --prod` from a local folder** (for example
`Z:\gateway-scholar-live`). A local copy is usually out of date, and deploying it
replaces the live site and silently removes newer changes. This happened on
28 October 2026 and had to be reverted.

If you edit locally, first pull the latest `main`, make the change, then push.

## Build and test locally

    node scripts/build-static.mjs
    node tests/verify-pages.mjs
    node tests/verify-metadata.mjs
    node tests/verify-dist.mjs

## Roll back

In Vercel → gateway-scholar-101 → Deployments, open an earlier production
deployment and choose "Promote to Production". Then fix `main` so the next
push does not re-break it.
