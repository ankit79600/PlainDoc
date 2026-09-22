import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PlainDoc — Explain Any Legal Document in Plain English",
    short_name: "PlainDoc",
    description:
      "Free AI tool that explains legal documents in plain English. Understand what you sign.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4338ca",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
