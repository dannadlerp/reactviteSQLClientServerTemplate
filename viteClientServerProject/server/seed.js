// server/seed.js
const sequelize = require("./config/database");
const Model = require("./models/model");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Model.create({ name: "Sample Name" });

  console.log("Database seeded!");
  process.exit(0);
};

seedDatabase();
