const path = require('path');

module.exports = {
  entry: './client/src/App.js', // 진입점 설정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
