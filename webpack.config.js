var path = require('path');

module.exports = {
  entry: './src/App.ts',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader!awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.ts', '.js']
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'app.js',
    publicPath: 'dist'
  },
  devServer: {
    contentBase: __dirname
  },
  devtool: 'source-map'
};