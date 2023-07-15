/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploadthing.com'],
    },
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
}

module.exports = nextConfig
