const debug = process.env.NODE_EV || 'production';
const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/app/scripts`,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: `${__dirname}/app/scripts/main.js`,
  output: {
    path: `${__dirname}/dist/scripts/`,
    filename: 'bundle.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourceMap: false,
    }),
  ],
};
