const { smart } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'smiles',
    projectName: 'boiler-plate',
    orgPackagesAsExternal: false,
    webpackConfigEnv,
    argv,
  });

  console.log(defaultConfig);
  delete defaultConfig.output.jsonpFunction;

  return smart(defaultConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      https: true,
      port: 8506,
    },
    externals: [
      'axios',
      'lottie-web',
      'react',
      'react-dom',
      'react-router-dom',
      'reactstrap',
    ],
  });
};
