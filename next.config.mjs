import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. ADD THIS: Tells Next.js to build static HTML files
  output: 'export',
  
  // 2. IMPORTANT FOR GITHUB PAGES: 
  // Because your repository is named "Tangiervibes", your site will be hosted at 
  // https://your-username.github.io/Tangiervibes/. 
  // Next.js needs to know this base path so it doesn't break your links and CSS.
  basePath: '/Tangiervibes',

  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // 3. ADD THIS: Disables the image optimization server (which GitHub Pages lacks)
    unoptimized: true, 
    
    // You can keep your remote patterns, but unoptimized: true will bypass the server processing.
    remotePatterns: imageHosts,
    // minimumCacheTTL: 60, <-- Commented this out as it doesn't apply to unoptimized static exports
  },
  webpack(
    config,
    {
      dev: dev
    }
  ) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    if (dev) {
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }
    return config;
  },
};
export default nextConfig;