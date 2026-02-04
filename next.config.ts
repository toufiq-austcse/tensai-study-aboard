/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Enable static export
    output: 'export',

    // 2. Set the base path (required for GitHub Pages)
    // Replace 'your-repo-name' with your actual repository name
    basePath: process.env.NODE_ENV === 'production' ? '/tensai-study-aboard' : '',

    // 3. Optional: Disable image optimization (GitHub Pages doesn't support the default Next.js Image Optimization)
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;