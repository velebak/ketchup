let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: {
    vendor: [
      'store/dist/store.modern',
      'date-fns/format',
      'lodash-es/debounce',
      'lodash-es/cloneDeep',
      'lodash-es/isEqual'
    ],
    app: 'app.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js/'),
    publicPath: '/admin/js/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src/js', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}