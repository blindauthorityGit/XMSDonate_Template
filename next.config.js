/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["firebasestorage.googleapis.com"], // Add the desired hostname(s) here
    },
};

module.exports = nextConfig;
