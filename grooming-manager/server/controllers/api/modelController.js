const Model = require("../../models/model");

const getAllModels = async (req, res) => {
  try {
    const models = await Model.findAll();
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllModels };
