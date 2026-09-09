import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images: { 
    unoptimized: true 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["shared-schema", "lucide-react"],
};

export default nextConfig;