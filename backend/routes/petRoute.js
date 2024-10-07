const express = require("express");
const router = express.Router();
const Pets = require("../models/petModel");
const multer = require("multer");
const path = require("path");

// Configure multer to store images in the 'uploads' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage: storage });

// GET all pets
router.get("/all", async (req, res) => {
  try {
    const fetchedpets = await Pets.find();
    res.status(200).json(fetchedpets);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching pets", error });
  }
});

// POST to add a new pet (with image upload)
router.post("/add", upload.single('petimg'), async (req, res) => {
  try {
    const { petname, petid, petbreed, petage } = req.body;
    if (!req.file || !petname || !petid || !petbreed || !petage) {
      return res.status(400).json({ message: "All pet details and image are required" });
    }

    const petimg = req.file.path; // Path to the uploaded image
    const newPet = new Pets({ petimg, petname, petid, petbreed, petage });
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while saving pet data", error });
  }
});

// DELETE a pet
router.delete("/delete/:id", async (req, res) => {
  try {
    const petId = req.params.id;
    const deletedPet = await Pets.findByIdAndDelete(petId);
    if (!deletedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json({ message: "Pet deleted successfully", deletedPet });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while deleting the pet", error });
  }
});

module.exports = router;
