/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // rawJsFromFile: fs.readFileSync("./public/static/library/js/bootstrap.bundle.min.js").toString(),
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

module.exports = nextConfig
