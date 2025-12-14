import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

// Middleware runs on EVERY request server-side - catches AI bots!
export const middleware: Route.MiddlewareFunction[] = [
  async ({ request }, next) => {
    const ua = request.headers.get("user-agent") ?? "";
    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-real-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "";

    const path = new URL(request.url).pathname;

    // Fire-and-forget tracking call
    fetch("https://propintel-eight.vercel.app/api/middleware-track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trackingId: "hGm_1D5K3BDAFScG",
        userAgent: ua,
        path,
        ip,
      }),
    }).catch(() => {});

    console.log(`[Middleware] ${request.method} ${path} - UA: ${ua.slice(0, 50)}...`);

    return next();
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
