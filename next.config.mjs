/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['pix2.agoda.net', 'pix4.agoda.net', 'pix1.agoda.net', 'pix3.agoda.net', 'pix5.agoda.net'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;
