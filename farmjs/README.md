# Farm.js example

A minimal [Farm.js](https://farmjs.dev) app: a server-rendered page with an interactive client component.

`farm.config.ts` sets `deploy.target` to `"node"`, so `npm run build` produces a self-contained Node server and `npm start` runs it on the port Dokploy provides through `PORT`.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```
