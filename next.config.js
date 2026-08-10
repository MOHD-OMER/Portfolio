/** @type {import('next').NextConfig} */

// The resume lives at /public/resume_2026.pdf. Keep this in one place so the
// cache header and the links in the UI can never drift apart again.
const RESUME_PATH = "/resume_2026.pdf";

const nextConfig = {
  async headers() {
    return [
      {
        // Tell browsers + Vercel CDN: never cache the resume.
        // Forces a fresh fetch every time — fixes the stale PDF on mobile.
        source: RESUME_PATH,
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
      {
        // Baseline security headers for a fully static marketing site.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
