// /server/routes/api/pet-routes.js
const router = require("express").Router();
const {
  getAllPets,
  getSinglePet,
  createPet,
  updatePet,
  deletePet,
} = require("../../controllers/api/pet-controller");

// /api/pets/
router.route("/").get(getAllPets).post(createPet);

router.route("/:id").get(getSinglePet).put(updatePet).delete(deletePet);

module.exports = router;
