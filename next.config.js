/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com','drive.google.com', 'localhost'],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig