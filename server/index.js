const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const db = require('../db/index.js');
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use( bodyParser.json() );
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

app.get('/api/reviews', (req, res) => {
  const query = 'select * from reviews';
  db.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/api/helpful', (req, res) => {
  // console.log(req.body);
  const id = req.body.id;
  const helpful = req.body.helpful;
  const query = `update reviews set ${helpful} = ${helpful} + 1 where id=${req.body.id}`;
  db.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

const fakeData = require('../fakeData.js');
app.post('/api/fakeData', (req, res) => {
  for (let i = 0; i < fakeData.length; i++) {
    const query = `insert into reviews (rating, recommend, size, width, comfort, quality, opinion, review, nickname, date, helpfulYes, helpfulNo) values (${fakeData[i][0]}, ${fakeData[i][1]}, ${fakeData[i][2]}, ${fakeData[i][3]}, ${fakeData[i][4]}, ${fakeData[i][5]}, '${fakeData[i][6]}', '${fakeData[i][7]}', '${fakeData[i][8]}', '${fakeData[i][9]}', ${fakeData[i][10]}, ${fakeData[i][11]});`;
    db.query(query, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
  }
})