var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, "build"),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env']
      }
    }]
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};