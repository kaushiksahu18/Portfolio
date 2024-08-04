/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   domains: ["images.unsplash.com","assets.aceternity.com","ui.aceternity.com"],
  // },
};
export default nextConfig;
