import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/__forms.html"],
      },
    ],
    sitemap: "https://cortexhive.co.uk/sitemap.xml",
    host: "https://cortexhive.co.uk",
  };
}
