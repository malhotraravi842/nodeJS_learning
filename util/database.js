const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: process.env.MYSQL_PASS,
});

module.exports = pool.promise();
