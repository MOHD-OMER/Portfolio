/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Tell browsers + Vercel CDN: never cache resume.pdf
        // Forces fresh fetch every time — fixes stale PDF on mobile
        source: "/resume.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
