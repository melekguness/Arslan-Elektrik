import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  /* Sol alttaki “N” widget’ı alt menüyle çakışmasın — tamamen kapat */
  devIndicators: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
