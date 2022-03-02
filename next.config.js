module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/admin/:any*',
        destination: 'http://localhost:3300/kashyap/:any*',
      },
      {
        source: '/customer/:any*',
        destination: 'http://localhost:3300/customer/:any*',
      },
    ]
  },
};
