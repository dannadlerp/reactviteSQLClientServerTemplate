const router = require("express").Router();
const clientRoutes = require("./client-routes");
const appointmentRoutes = require("./appointment-routes");
const petRoutes = require("./pet-routes");
const userRoutes = require("./user-routes");

router.use("/clients", clientRoutes);
router.use("/users", userRoutes);
router.use("/pets", petRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/", (req, res) => {
  res.send("Welcome to the Grooming Manager API!");
});

module.exports = router;
