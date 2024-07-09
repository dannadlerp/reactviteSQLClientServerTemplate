const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  login,
  logout,
} = require("../../controllers/api/user-controller");

// import middleware
/* const { authMiddleware } = require("../../utils/auth"); */

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser) /* put(authMiddleware) */;

router.route("/login").post(login);

router.route("/user").get(getSingleUser);

module.exports = router;
