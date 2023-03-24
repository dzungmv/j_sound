/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
        appDir: true,
    },
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['jungjung261.blob.core.windows.net'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
