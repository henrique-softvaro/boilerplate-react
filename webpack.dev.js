const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/template.dev.html'
    }),
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      analyzerMode: "server"
    })
  ]
})
