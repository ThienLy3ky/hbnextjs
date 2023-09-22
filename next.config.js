/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "storage.googleapis.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin", // "same-origin-allow-popups"
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
