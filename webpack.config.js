const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      components: path.resolve(__dirname, 'src/components/'),
      hocs: path.resolve(__dirname, 'src/hocs/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      store: path.resolve(__dirname, 'src/store/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              }
            ],
            '@babel/typescript',
            '@babel/react'
          ]
        }
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
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        FACEBOOK_CLIENT_ID: JSON.stringify(process.env.FACEBOOK_CLIENT_ID),
        GOOGLE_CLIENT_ID: JSON.stringify(process.env.GOOGLE_CLIENT_ID),
        API_URL: JSON.stringify(process.env.API_URL),
        LOGROCKET_TOKEN: JSON.stringify(process.env.LOGROCKET_TOKEN),
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
}
