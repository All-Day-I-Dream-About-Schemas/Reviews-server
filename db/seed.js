const db = require('./index.js');
var faker = require('faker');

const fakeData = [];

for (let i = 0; i < 150; i++) {
  const data = [];
  data.push(Math.floor(Math.random() * 5) + 1);
  let boolean = Math.random();
  if (boolean < 0.5) {
    data.push(true);
  } else {
    data.push(false);
  }
  data.push(Math.floor(Math.random() * 5) + 1);
  data.push(Math.floor(Math.random() * 5) + 1);
  data.push(Math.floor(Math.random() * 5) + 1);
  data.push(Math.floor(Math.random() * 5) + 1);
  data.push(faker.lorem.words());
  data.push(faker.lorem.sentences());
  data.push(faker.internet.userName());
  data.push(JSON.stringify(faker.date.past()).substring(1, 11));
  data.push(Math.floor(Math.random() * 100));
  data.push(Math.floor(Math.random() * 20));
  fakeData.push(data);
}

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
