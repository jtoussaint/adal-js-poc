'use strict';

var webpack = require('webpack');
var path = require('path');
var config = {};

var paths = {
  js: {
    build: 'wwwroot/scripts/',
    source: './App/',
    specs: 'App/**/*.spec.js'
  }
};

config.paths = paths;

var webpackEntries = {};
webpackEntries['app-bundle'] = paths.js.source + 'app.js';
webpackEntries['common'] = [
    'react',
    'react-dom'
];

config.webpack = {
  entry: webpackEntries,
  output: {
    filename: '[name].js',
    path: paths.js.build,
    sourceMapFilename: '[file].json'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015', 'react'],
        retainLines: true,
        cacheDirectory: true
      }
    }]
  },
  resolve: {
    root: path.resolve(paths.js.source),
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'app-common.js',
      minchunks: 2
    })
  ],
  devtool: 'cheap-source-map'
};

config.webpackmiddleware = {
  quiet: false,
  noinfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkmodules: false
  }
};

module.exports = config;
