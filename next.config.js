/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  async headers() {
    return [
      {
        source: "/pages/api/*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
