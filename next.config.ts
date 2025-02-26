import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    deviceSizes: [300, 1980]
  }
};

export default nextConfig;
