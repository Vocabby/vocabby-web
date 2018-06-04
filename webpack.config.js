const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

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
    new webpack.DefinePlugin({
      'process.env': {
        FACEBOOK_CLIENT_ID: JSON.stringify(process.env.FACEBOOK_CLIENT_ID),
        GOOGLE_CLIENT_ID: JSON.stringify(process.env.GOOGLE_CLIENT_ID),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new Dotenv(),
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
