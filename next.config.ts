import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www to non-www redirect — canonical consistency
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.shivoramedia.com" }],
        destination: "https://shivoramedia.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
