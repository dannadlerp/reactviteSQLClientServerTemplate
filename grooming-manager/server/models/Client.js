const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Firstname",
      validate: {
        len: [1, 30],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Lastname",
      validate: {
        len: [1, 30],
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "000-000-0000",
      validate: {
        isphone: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "email@email.com",
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "1234 Address St.",
    },
    client_notes: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Client Notes",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "client",
  }
);

module.exports = Client;
