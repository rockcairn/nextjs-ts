import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['knex'],
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
       {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/mountain/mountains.php',
        destination: '/peaks',
        permanent: true, // 301 if true, 307 if false
      },
      {
        source: '/personal/trip/personal-trips.php',
        destination: '/trips',
        permanent: true, // 301 if true, 307 if false
      },
    ];
  },
};

export default nextConfig;
