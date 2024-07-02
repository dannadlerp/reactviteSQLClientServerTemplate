const { Client } = require("pg");
const sequelize = require("./config/connection");
const Model = require("./models/model");

const createDatabase = async () => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "password",
    port: 5432,
  });

  try {
    await client.connect();
    await client.query("CREATE DATABASE reactServerClient_db");
    console.log("Database created successfully");
  } catch (error) {
    if (error.code === "42P04") {
      // '42P04' is the error code for 'database already exists'
      console.log("Database already exists");
    } else {
      console.error("Error creating database:", error);
    }
  } finally {
    await client.end();
  }
};

const connectSequelizeWithRetry = async (retries = 5, wait = 5000) => {
  while (retries > 0) {
    try {
      await sequelize.authenticate();
      console.log(
        "Connection to the database has been established successfully."
      );
      await sequelize.sync({ force: true });
      await Model.create({ name: "Sample Name" });
      console.log("Database seeded!");
      process.exit(0);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      retries -= 1;
      if (retries === 0) {
        console.error("Out of retries. Exiting...");
        process.exit(1);
      }
      console.log(
        `Retrying in ${wait / 1000} seconds... (${retries} retries left)`
      );
      await new Promise((res) => setTimeout(res, wait));
    }
  }
};

const seedDatabase = async () => {
  await createDatabase();
  await connectSequelizeWithRetry();
};

seedDatabase();
