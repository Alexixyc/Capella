const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: "./src/main.js",
  devServer: {
    port: 3000
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg)$/, loader: 'file' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devtool: '#source-map'
}