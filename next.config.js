function MultipleLinks(destination, ...sources) {
  return sources.map(e => ({
    source: e,
    destination,
    permanent: true
  }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      ...MultipleLinks("https://discord.com/", "/r")
    ]
  }
}

module.exports = nextConfig
