const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log('failed to connect');
  } else {
    console.log('database connected!')
  }
});

module.exports = connection;
