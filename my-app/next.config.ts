import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    serverActions: {
      bodySizeLimit: '5000mb',
    },
  },
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
};

export default nextConfig;