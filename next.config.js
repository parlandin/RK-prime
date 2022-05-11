/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com','drive.google.com', 'localhost', 'rk-prime.herokuapp.com'],
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig