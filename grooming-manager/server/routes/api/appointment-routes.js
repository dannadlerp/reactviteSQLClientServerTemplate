// /server/routes/api/appointment-routes.js
const router = require("express").Router();
const {
  getAllAppointments,
  getSingleAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../../controllers/api/appointment-controller");

// /api/appointments/
router.route("/").get(getAllAppointments).post(createAppointment);

router
  .route("/:id")
  .get(getSingleAppointment)
  .put(updateAppointment)
  .delete(deleteAppointment);

module.exports = router;
