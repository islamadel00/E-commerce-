import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        port: '',
        pathname: '/Route-Academy-products/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        port: '',
        pathname: '/Route-Academy-categories/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        port: '',
        pathname: '/Route-Academy-brands/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;