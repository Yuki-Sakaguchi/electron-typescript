const path = require('path')

/**
 * メインプロセス用のソースコード
 */
const main = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src', 'main', 'app'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist', 'main')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map'
}

/**
 * レンダラー用のソースコード
 */
const renderer = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.join(__dirname, 'src', 'renderer', 'app'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist', 'renderer')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = [main, renderer]
