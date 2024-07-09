const User = require("./User");
const Client = require("./Client");
const Pet = require("./Pet");
const Appointment = require("./Appointment");

Client.hasMany(Pet, {
  foreignKey: "client_id",
  as: "pets",
});

Pet.belongsTo(Client, {
  foreignKey: "client_id",
  as: "owner",
});

Pet.hasMany(Appointment, {
  foreignKey: "pet_id",
  as: "appointments",
});

Appointment.belongsTo(Pet, {
  foreignKey: "pet_id",
  as: "pet",
});

User.hasMany(Client, {
  foreignKey: "user_id",
  as: "clients",
});

User.hasMany(Appointment, {
  foreignKey: "groomer_id",
  as: "appointments",
});

Appointment.belongsTo(User, {
  foreignKey: "groomer_id",
  as: "groomer",
});

module.exports = { Appointment, Client, User, Pet };
