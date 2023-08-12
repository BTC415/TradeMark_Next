/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['investor.farmd.co'],
    // unoptimized:true
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
