/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [300, 1980]
  },
  compiler: {
    removeConsole: true,
  }
};

export default nextConfig;
