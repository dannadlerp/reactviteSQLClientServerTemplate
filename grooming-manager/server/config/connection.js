const { Sequelize } = require("sequelize");

// Load environment variables from a .env file
/* require("dotenv").config(); */

const sequelize = new Sequelize(
  /*   process.env.DB_NAME, // Name of the database
    process.env.DB_USER, // Database user
    process.env.DB_PASSWORD, // Database user's password
  console.log("DB_NAME:", process.env.DB_NAME);
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD); */
  "reactserverclient_db",
  "postgres",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
    /* port: 3306, // Port on which the database server is running */
  }
);

module.exports = sequelize;
