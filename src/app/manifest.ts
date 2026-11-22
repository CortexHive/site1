import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CortexHive — Websites, AI Automation & Custom Software UK",
    short_name: "CortexHive",
    description:
      "Technology That Moves Your Business Forward. Professional websites from £99, 24/7 AI receptionists, business automation and custom software development in the UK.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#14243A",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
