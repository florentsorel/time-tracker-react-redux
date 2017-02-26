const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname);

const ExtractTextPluginConfig = new ExtractTextPlugin('css/app.css')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "Time Tracker",
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/src/index.jsx',
    './app/styles/main.scss',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/app.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      selectors: path.resolve(ROOT_PATH, 'app/src/selectors'),
      styles: path.resolve(ROOT_PATH, 'app/styles'),
    },
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
}