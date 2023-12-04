// // app.js

// const express = require('express');
// const path = require('path');
// const app = express();

// // 미들웨어 설정
// app.use(express.static(path.join(__dirname, 'dist')));

// // 기본 라우트 설정
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
// });

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`서버 ON: http://localhost:${port}`);
// });
