/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        serverComponentsExternalPackages: ['@react-pdf/renderer'],
    },
    webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    })
    return config
  },
};

export default nextConfig;
