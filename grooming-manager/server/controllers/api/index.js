const router = require("express").Router(); // Import the Router class from Express.js

const userRoutes = require("./user-controller"); // Import the user routes
const clientRoutes = require("./client-controller"); // Import the client routes
const petRoutes = require("./pet-controller"); // Import the pet routes
const appointmentRoutes = require("./appointment-controller"); // Import the appointment routes

router.use("/users", userRoutes); // Use the user routes
router.use("/clients", clientRoutes); // Use the client routes
router.use("/pets", petRoutes); // Use the pet routes
router.use("/appointments", appointmentRoutes); // Use the appointment routes

// Middleware to handle 404 for unknown routes
router.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router; // Export the router for use in other parts of the application
