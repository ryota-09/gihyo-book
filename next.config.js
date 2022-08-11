/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    //NOTE: styledComponentsの有効化(SSRでも動作するため)
    styledComponents: true,
  },
}

module.exports = nextConfig
