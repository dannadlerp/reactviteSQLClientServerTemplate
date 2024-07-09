const router = require("express").Router();
/* const withAuth = require("../../utils/auth"); */
const Client = require("../../models/Client");

// GET all clients
const getAllClients = async (req, res) => {
  try {
    const clientData = await Client.findAll();
    console.log(`clientdata: ${clientData}`);
    res.status(200).json(clientData);
  } catch (err) {
    console.error(err); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while retrieving clients." });
    console.log(`error: ${err}`);
  }
};

// GET a single client
const getSingleClient = async (req, res) => {
  try {
    const clientData = await Client.findByPk(req.params.id);

    if (!clientData) {
      res.status(404).json({ message: "No client found with that id!" });
      return;
    }

    res.status(200).json(clientData);
  } catch (err) {
    console.error(err); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the client." });
  }
};

// CREATE a client
const createClient = async (req, res) => {
  try {
    const clientData = await Client.create(req.body);
    res.status(200).json(clientData);
  } catch (err) {
    console.error(err); // Log the error
    res
      .status(400)
      .json({ error: "An error occurred while creating the client." });
  }
};

// UPDATE a client
const updateClient = async (req, res) => {
  try {
    const clientData = await Client.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!clientData[0]) {
      res.status(404).json({ message: "No client found with this id!" });
      return;
    }

    res.status(200).json(clientData);
  } catch (err) {
    console.error(err); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while updating the client." });
  }
};

// DELETE a client
const deleteClient = async (req, res) => {
  try {
    const clientData = await Client.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!clientData) {
      res.status(404).json({ message: "No client found with this id!" });
      return;
    }

    res.status(200).json(clientData);
  } catch (err) {
    console.error(err); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while deleting the client." });
  }
};

module.exports = {
  getAllClients,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient,
};
