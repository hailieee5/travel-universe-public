import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname
  },
  images: {
    deviceSizes: [320, 480, 640, 768, 960, 1200, 1600, 2048],
    qualities: [65, 80],
    minimumCacheTTL: 31_536_000
  }
};

export default nextConfig;
