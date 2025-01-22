/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'plus.unsplash.com', 
          'images.unsplash.com', 
          'next-ecommerce-template-4.vercel.app', // Add this domain
        ],
      },
};

export default nextConfig;








//...................................this blow code is for remote image optimization.............................................
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'another-domain.com',
//       },
//     ],
//   },
// };

// export default nextConfig;
