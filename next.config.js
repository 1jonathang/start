/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploadthing.com'],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
