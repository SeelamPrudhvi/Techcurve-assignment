const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
  user: "candidate",
  password: "NoTeDeSt^C10.6?SxwY882}",
  database: "conqtvms_dev",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("mysql server is connected successfully");
});
module.exports = db;
