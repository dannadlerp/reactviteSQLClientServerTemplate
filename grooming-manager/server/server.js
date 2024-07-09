const express = require("express");
const cors = require("cors");
const sequelize = require("./config/connection");
const modelRoutes = require("./routes/api/");
/* const modelRoutes = require("./routes/api/modelRoutes"); */

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", modelRoutes);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
