module.exports = {
  env: {
    BASE_URL:
      process.env.BASE_URL ||
      (process.env.PULL_REQUEST === 'true'
        ? process.env.DEPLOY_PRIME_URL
        : process.env.URL),
  },
  target: 'serverless',
};
