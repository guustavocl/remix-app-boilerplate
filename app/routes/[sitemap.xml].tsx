import { LoaderFunction } from "@remix-run/node";
import { productionUrl } from "~/config";

export const loader: LoaderFunction = async () => {
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${productionUrl}</loc>
          <lastmod>2024-04-01</lastmod>
        </url>
      </urlset>
      `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8",
    },
  });
};
