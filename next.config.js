/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        // serverComponentsExternalPackages: ["mongoose"],
    }
}

module.exports = nextConfig

// module.exports = (phase, { defaultConfig }) => {
//     return {
//       ...defaultConfig,
//       experimental: {
//                 appDir: true,
//                 serverComponentsExternalPackages: ["mongoose"],
//             },
  
//       webpack: (config) => {
//         config.resolve = {
//           ...config.resolve,
//           fallback: {
//             "fs": false,
//             "path": false,
//             "os": false,
//           }
//         }
//         return config
//       },
//     }
//   }