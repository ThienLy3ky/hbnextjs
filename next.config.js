/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "vinpack.vn",
      "assets.herbalifenutrition.com",
      "duocphamdragon.com",
    ],
  },
};

module.exports = nextConfig;
