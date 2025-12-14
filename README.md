# React Router 7 SSR with Middleware

A React app with server-side rendering and middleware for tracking page views, including AI bot crawlers.

## Features

- **React Router 7** with SSR (server-side rendering)
- **Server middleware** that runs on every request
- **Bot tracking** - catches AI crawlers (GPTBot, ClaudeBot, etc.) that don't execute JavaScript
- **Firebase App Hosting** ready

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Firebase App Hosting

1. Update `.firebaserc` with your Firebase project ID
2. Run `firebase apphosting:backends:create`
3. Connect to your GitHub repo - auto-deploys on push

## Middleware

The tracking middleware in `app/root.tsx` runs server-side on every request:

```typescript
export const middleware: Route.MiddlewareFunction[] = [
  async ({ request }, next) => {
    fetch("https://your-tracking-endpoint.com/api/track", {
      method: "POST",
      body: JSON.stringify({
        userAgent: request.headers.get("user-agent"),
        path: new URL(request.url).pathname,
        ip: request.headers.get("x-forwarded-for"),
      }),
    }).catch(() => {});
    return next();
  },
];
```
