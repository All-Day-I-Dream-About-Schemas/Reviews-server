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

module.exports = fakeData;
