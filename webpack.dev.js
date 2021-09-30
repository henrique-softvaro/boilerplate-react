const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

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
    })
  ]
})
