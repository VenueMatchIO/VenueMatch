const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/, // styles files
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportOnlyLocals: false,
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
          ,
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
