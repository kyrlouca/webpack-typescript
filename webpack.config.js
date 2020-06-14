const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 1
  entry: './src/index.js',

  // 2
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'index.html',
    }),
  ],
  // 3
  devServer: {
    contentBase: './dist',
    port: 8000,
  },
};
