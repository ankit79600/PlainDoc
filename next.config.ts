import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode catches potential issues early
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Images: allow next/image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // pdf-parse uses Node.js fs — mark it server-only so it's never bundled into the browser
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
