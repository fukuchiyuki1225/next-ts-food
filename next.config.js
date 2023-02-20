/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgfp.hotp.jp"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
