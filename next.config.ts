import type { NextConfig } from "next";
const withVideos = require('next-videos');

const nextConfig: NextConfig = withVideos({
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
