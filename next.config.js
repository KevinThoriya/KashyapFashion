module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/admin/:any*',
        destination: 'http://localhost:3300/admin/:any*',
      },
      {
        source: '/customer/:any*',
        destination: 'http://localhost:3300/customer/:any*',
      },
    ]
  },
};
