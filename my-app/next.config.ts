import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
        hostname: 'xnpkkelfdsosehvkgfjr.supabase.co',
        port: '', // leave blank unless you're using a non-standard port
        pathname: '/storage/v1/object/public/videography/**',
    }],
  },
};

export default nextConfig;
