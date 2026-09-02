import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.kiwi.com",
      },
      {
        protocol: "https",
        hostname: "suma.webkarigor.com",
      },
      {
        protocol: "https",
        hostname: "**.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
