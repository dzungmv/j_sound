/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
        appDir: true,
    },
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                module: false,
            };
        }

        return config;
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['jungjung261.blob.core.windows.net'],
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

module.exports = nextConfig;
