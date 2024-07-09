const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Middleware to handle 404 for unknown routes
router.use((req, res, next) => {
  res
    .status(404)
    .json({
      error: "Route not found",
      message: "The requested route does not exist",
    });
});

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

module.exports = router;
