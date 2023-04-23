/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ["opengraph.githubassets.com", "cdn.sstatic.net", "a0.awsstatic.com", "res.cloudinary.com"],
  },
}



module.exports = nextConfig
