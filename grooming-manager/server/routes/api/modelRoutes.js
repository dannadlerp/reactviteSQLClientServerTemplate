const express = require("express");
const { getAllModels } = require("../../controllers/api/modelController");

const router = express.Router();

router.get("/models", getAllModels);

module.exports = router;
