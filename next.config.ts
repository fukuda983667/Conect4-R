import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ← ESLint エラーでもビルドを止めない
  },
};

export default nextConfig;
