/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "exante.eu",
      "ohspets.shelterbuddy.com",
      "upload.wikimedia.org",
      "www.svgrepo.com",
      "cdn.snowball-analytics.com",
    ],
  },
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {}
    }
    config.experiments.topLevelAwait = true
    return config
  },
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: "loose", appDir: true },
}

module.exports = nextConfig
