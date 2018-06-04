const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.EnvironmentPlugin(localEnv),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/',
  },
}
