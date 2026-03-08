import { NextConfig } from 'next' // facultatif, aide l'IDE

const nextConfig: NextConfig = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'images-assets.nasa.gov',
},
{
protocol: 'https',
hostname: 'www.nasa.gov',
},
],
},
};

export default nextConfig;