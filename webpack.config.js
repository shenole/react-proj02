module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
    sourceMapFilename: './dist/bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
