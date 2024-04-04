import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { ThemeProvider } from "./components/providers/ThemeProvider";

import styles from "./tailwind.css";
import { Header } from "./components/ui/Header";
import { useEffect } from "react";
import { posthog } from "posthog-js";
import Analytics from "./components/ui/Analytics";
import { Footer } from "./components/ui/Footer";
import { productionUrl } from "./config";

const title = "Remix App boilerplate";
const description = "Just an Remix app boilerplate";
const metaImage = `${productionUrl}/meta-image.png`;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function loader() {
  return json({
    publicKeys: {
      POSTHOG_API_KEY: process.env.POSTHOG_API_KEY,
    },
  });
}

export default function App() {
  const location = useLocation();
  const { publicKeys } = useLoaderData<typeof loader>();

  useEffect(() => {
    posthog.capture("$pageview");
  }, [location]);

  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={title}></meta>
        <meta name="description" content={description}></meta>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="keywords" content="remix, boilerplate" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="https://gus.sh" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={productionUrl} />
        <meta property="og:url" content={productionUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:locale" content="en" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={productionUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />

        <Meta />
        <Links />
      </head>
      <body className="relative min-h-[100dvh] md:min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics PH_TRACKING_ID={publicKeys.POSTHOG_API_KEY} />
      </body>
    </html>
  );
}
