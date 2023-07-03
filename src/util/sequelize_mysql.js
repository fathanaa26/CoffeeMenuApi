import { Sequelize } from "sequelize";
import getExtIp from "./getExtIp.js";

const sqlize = new Sequelize(
  process.env.DB,
  process.env.USERNAME_DB,
  process.env.PW_DB,
  {
    host: getExtIp().address,
    dialect: "mysql",
  }
);

sqlize
  .authenticate()
  .then(() => {
    console.log("[SQLize connected]");
  })
  .catch((e) => {
    console.log("[SQLize not connected]");
    console.error(e);
  });

export default sqlize;
