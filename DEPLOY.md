# Gateway Scholar Deployment

## Build

Run `node .\scripts\build-static.mjs`

## Verify

Run `node .\tests\verify-dist.mjs`

## Host

- Netlify: upload the `dist` folder
- Vercel: upload the `dist` folder as a static site
- GitHub Pages: publish the contents of `dist`
