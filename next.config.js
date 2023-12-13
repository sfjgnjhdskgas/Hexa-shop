/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    domains: ["i.dummyjson.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
