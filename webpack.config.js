// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // 또는 'production'
  entry: './client/src/index.js', // 진입점 설정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/public/index.html',
    filename: 'bundle.html',
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel을 사용하여 ES6+ 문법 변환
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // CSS 파일 로딩 및 적용
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'client/public'),
    port: 3000,
  },
};
