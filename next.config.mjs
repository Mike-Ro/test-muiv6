// next.config.mjs

import {withPigment} from '@pigment-css/nextjs-plugin';
import * as MUI from '@mui/material';

const theme = MUI.createTheme({});
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
  transformLibraries: ['@mui/material'],
  theme,
};

export default withPigment(nextConfig, pigmentConfig);
