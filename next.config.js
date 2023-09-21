/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "vinpack.vn",
      "assets.herbalifenutrition.com",
      "duocphamdragon.com",
      "storage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
