const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const db = require('../db/index.js')

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
