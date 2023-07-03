import { DataTypes } from "sequelize";
import sqlize from "../util/sequelize_mysql.js";

const table_name = "coffee_list";

const CoffeeList = sqlize.define(table_name, {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cretedAt: {
    type: DataTypes.DATEONLY,
  },
});

sqlize
  .sync()
  .then(() => {
    console.log(`${table_name} created`);
  })
  .catch((e) => {
    console.error(e);
  });

export default CoffeeList;
