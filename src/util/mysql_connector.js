import db_config from "../config/db.config.js";
import mysql from "mysql";

const db = mysql.createConnection({
  connectionLimit: 10,
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connect Successfully [mysql_conn]");
});

export default db;
