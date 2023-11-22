/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
      },
    ],
  },
}