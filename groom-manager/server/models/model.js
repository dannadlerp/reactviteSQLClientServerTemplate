const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Model = sequelize.define("Model", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Model;
