/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com','drive.google.com', 'localhost', 'rk-prime.herokuapp.com'],
        imageSizes: [40, 48, 60, 64, 96, 128, 256, 384, 400, 700, 800, 1000],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig