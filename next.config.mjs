// next.config.mjs

import {withPigment} from '@pigment-css/nextjs-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  // transformLibraries: ['@mui/material'],
};

export default withPigment(nextConfig, pigmentConfig);
