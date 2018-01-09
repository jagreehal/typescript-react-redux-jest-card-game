const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader'
  });
  config.resolve.extensions.unshift('.ts', '.tsx');
  return config;
};
