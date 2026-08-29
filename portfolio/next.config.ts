import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local screenshots only — no remote image hosts are trusted.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
