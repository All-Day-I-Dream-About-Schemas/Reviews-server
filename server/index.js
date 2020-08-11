const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

app.get('/api/reviews', (req, res) => {
  const query = 'select * from reviews';
  db.query(query, (err, data) => {
    if (err) {
      console.log('err');
    } else {
      console.log(data);
    }
  })
})

// const fakeData = require('../fakeData.js');
// app.post('/api/fakeData', (req, res) => {
//   for (let i = 0; i < fakeData.length; i++) {
//     const query = `insert into reviews (rating, recommend, size, width, comfort, quality, opinion, review, nickname, date) values (${fakeData[i][0]}, ${fakeData[i][1]}, ${fakeData[i][2]}, ${fakeData[i][3]}, ${fakeData[i][4]}, ${fakeData[i][5]}, '${fakeData[i][6]}', '${fakeData[i][7]}', '${fakeData[i][8]}', '${fakeData[i][9]}');`;
//     db.query(query, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     })
//   }
// })