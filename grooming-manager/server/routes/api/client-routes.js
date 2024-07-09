const express = require("express");
const {
  getAllClients,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../../controllers/api/client-controller");

const router = express.Router();

// /api/clients/
router.route("/clients").get(getAllClients).post(createClient);

router
  .route("/:id")
  .get(getSingleClient)
  .delete(deleteClient)
  .put(updateClient);

module.exports = router;
