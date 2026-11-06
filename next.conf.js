/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Nasr",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
