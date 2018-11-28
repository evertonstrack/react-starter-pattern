const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
const path = require('path');

module.exports = (config, env) => {
  config.module.rules.push(
    {
      test: /\.component\.html/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('html-to-react-loader'),
        }
      ],
      include: path.resolve('src')
    }
  );
  return config
};
