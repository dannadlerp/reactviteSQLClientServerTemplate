const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
      validate: {
        isIn: [
          [
            "empty",
            "active",
            "cancelled",
            "completed",
            "no_show",
            "rescheduled",
          ],
        ],
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00",
    },
    contact_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "client",
        key: "id",
        defaultValue: "contact name",
      },
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: function () {
        return this.status !== "empty";
      },
      defaultValue: null,
      references: {
        model: "pet",
        key: "id",
      },
    },
    callback_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    grooming_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Nail trim",
    },
    price: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    grooming_notes: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "grooming notes",
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "appointment",
  }
);

module.exports = Appointment;
