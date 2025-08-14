import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
        hostname: 'xnpkkelfdsosehvkgfjr.supabase.co',
        port: '', // leave blank unless you're using a non-standard port
        pathname: '/storage/v1/object/public/videography/**',
    },
    {
      protocol: 'https',
        hostname: 'xnpkkelfdsosehvkgfjr.supabase.co',
        port: '', // leave blank unless you're using a non-standard port
        pathname: '/storage/v1/object/public/photography/projects/**',
    },
    {
      protocol: 'https',
        hostname: 'xnpkkelfdsosehvkgfjr.supabase.co',
        port: '', // leave blank unless you're using a non-standard port
        pathname: '/storage/v1/object/public/photography/**',
    },
    {protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '', // leave blank unless you're using a non-standard port
        pathname: '/**',
    }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;