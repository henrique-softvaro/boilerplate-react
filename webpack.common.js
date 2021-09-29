const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.platform': JSON.stringify(process.platform),
    }),
    new CleanWebpackPlugin()
  ]
}
