/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: "cblhbpsdfftjxtwb.public.blob.vercel-storage.com",
    },
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
    },
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
    },
    {
      protocol: 'https',
      hostname: 'storage.googleapis.com',
    },
    {
      protocol: 'https',
      hostname: 'storage.googleapis.com',
    },
    {
      protocol: 'https',
      hostname: 'platform-lookaside.fbsbx.com',
    },
    {
      protocol: 'https',
      hostname: 'platform-lookaside.fbsbx.com',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'assets.aceternity.com',
    },
    {
      protocol: 'https',
      hostname: 'assets.aceternity.com',
    },
  ]
  }
};

export default nextConfig;