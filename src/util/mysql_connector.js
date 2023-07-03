import mysql from "mysql";
import getExtIp from "./getExtIp.js";
import "dotenv/config";

const db = mysql.createConnection({
  connectionLimit: 10,
  host: getExtIp().address || "localhost",
  user: process.env.USERNAME_DB,
  password: process.env.PW_DB,
  database: process.env.DB,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connect Successfully [mysql_conn]");
});

db.query("SHOW DATABASES", (err, res) => {
  if (err) throw err;
  console.log(res);
});

export default db;
