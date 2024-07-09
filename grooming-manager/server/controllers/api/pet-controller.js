const router = require("express").Router();
const { Client, Pet } = require("../../models");
/* const withAuth = require("../../utils/auth"); */
const { getAllAppointments } = require("./appointment-controller");

// GET all pet data
const getAllPets = async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [
        {
          model: Client,
          attributes: ["last_name"],
        },
      ],
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET a single pet
const getSinglePet = async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: Client,
          attributes: ["last_name"],
        },
      ],
    });

    if (!petData) {
      res.status(404).json({ message: "No pet found with that id!" });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// CREATE a pet
const createPet = async (req, res) => {
  try {
    const petData = await Pet.create(req.body);
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE a pet
const updatePet = async (req, res) => {
  try {
    const petData = await Pet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!petData[0]) {
      res.status(404).json({ message: "No pet found with this id!" });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE a pet
const deletePet = async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: "No pet found with this id!" });
      return;
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

// Export the router object
module.exports = {
  getAllPets,
  getSinglePet,
  createPet,
  updatePet,
  deletePet,
};
