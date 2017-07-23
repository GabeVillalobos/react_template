const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry : './lib/mainContainer.jsx',
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test    : /\.(js|jsx)$/,
        use     : 'babel-loader',
        exclude : /\node_modules/
      }, {
        test : /\.less$/,
        use  : [{
          loader : 'style-loader',
        }, {
          loader : 'css-loader'
        }, {
          loader : 'less-loader'
        }]
      }
    ]
  },

  plugins : [
    HtmlWebpackPluginConfig,
    extractLess
  ]
}
