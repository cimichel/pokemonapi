/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            hostname: '',
        },
        {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/cintiainthey2k/**',
        }
    ]
    }
}

module.exports = nextConfig
