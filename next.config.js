/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['exante.eu', 'ohspets.shelterbuddy.com', "upload.wikimedia.org", "www.svgrepo.com"] },
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
}

module.exports = nextConfig
