const { smart } = require('webpack-merge');

const outputPath = path.join(__dirname, `build/${pkg.projectName}/${pkg.version}`);

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'smiles',
    projectName: 'boiler-plate',
    orgPackagesAsExternal: false,
    disableHtmlGeneration: true,
    webpackConfigEnv,
  });

  return smart(defaultConfig, {
    mode: 'production',
    devtool: false,
    externals: [
      'axios',
      'lottie-web',
      'react',
      'react-dom',
      'react-router-dom',
      'reactstrap',
    ],
    output: {
      path: outputPath,
    },
  });
};
