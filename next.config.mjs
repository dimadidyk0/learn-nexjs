/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/hiragana',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
