/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "./pages/api/:path*", // Matches all API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.ALLOWED_CORS_ORIGINS,
          },
          // Add other CORS headers if needed (e.g., Access-Control-Allow-Methods, Access-Control-Allow-Headers)
        ],
      },
    ];
  },
};

module.exports = nextConfig;
