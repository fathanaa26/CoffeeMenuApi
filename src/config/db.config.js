import getExtIp from "../util/getExtIp.js";

const db_config = {
  host: getExtIp().address,
  user: "root",
  password: "password",
  database: "sql12626912",
};

export default db_config;
