// server/routes/modelRoutes.js
const express = require("express");
const { getAllModels } = require("../controllers/modelController");

const router = express.Router();

router.get("/models", getAllModels);

module.exports = router;
