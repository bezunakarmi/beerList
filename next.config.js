/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    swcMinify: true,
    images: {
        domains: ['images.punkapi.com', 'localhost'], // <== Domain name
    },
}

module.exports = nextConfig
