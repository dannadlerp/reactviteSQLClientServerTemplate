// /server/controllers/api/appointment-controller.js
const { Client, Pet, User, Appointment } = require("../../models");

const getAllAppointments = async (req, res) => {
  try {
    const appointmentData = await Appointment.findAll({
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
          include: [
            {
              model: Pet,
              attributes: ["first_name"],
            },
          ],
        },
      ],
    });

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleAppointment = async (req, res) => {
  try {
    const appointmentData = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
          include: [
            {
              model: Pet,
              attributes: ["first_name"],
            },
          ],
        },
      ],
    });

    if (!appointmentData) {
      res.status(404).json({ message: "No appointment found with that id!" });
      return;
    }

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointmentData = await Appointment.create(req.body);
    res.status(201).json(appointmentData);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appointmentData = await Appointment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!appointmentData[0]) {
      res.status(404).json({ message: "No appointment found with this id!" });
      return;
    }

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointmentData = await Appointment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!appointmentData) {
      res.status(404).json({ message: "No appointment found with this id!" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllAppointments,
  getSingleAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
