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
  ]
  }
};

export default nextConfig;