/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '', // MUST BE EMPTY
    images: {
        unoptimized: true,
    },
};
module.exports = nextConfig;