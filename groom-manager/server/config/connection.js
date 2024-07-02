const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "reactserverclient_db",
  "postgres",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = sequelize;
