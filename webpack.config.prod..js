import path from 'path';
import webpack from 'webpack';

export default{
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
	new webpack.optimize.UglifyJsPlugin(),
	new webpack.optimize.DedupePlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      //It's not longer allowed to omit the -loader suffix when using loaders.
      test: /\.css$/,
      loaders: ['style-loader','css-loader']
    }]
  }
}
