/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.prismic.io", "cdn.searchenginejournal.com"], 
  },
  env: {
    NODE_EMAIL: process.env.NEXT_PUBLIC_NODE_EMAIL,
    NODE_PASSWORD: process.env.NEXT_PUBLIC_NODE_PASSWORD,
  },
};

module.exports = nextConfig;
