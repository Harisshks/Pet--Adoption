const express = require("express");
const router = express.Router();
const Pets = require("../models/petModel");

// Route to get all pets
router.get("/all", async (req, res) => {
  try {
    const fetchedpets = await Pets.find();
    res.status(200).json(fetchedpets);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching pets", error });
  }
});

// Route to add a new pet
router.post("/add", async (req, res) => {
  try {
    const newpetdata = new Pets(req.body);
    const { petimg, petname, petid, petbreed, petage } = newpetdata;

    // Check if all required fields are provided
    if (!petimg || !petname || !petid || !petbreed || !petage) {
      return res.status(400).json({ message: "All pet details are required" });
    }

    // Save the new pet to the database
    const savedata = await newpetdata.save();
    res.status(201).json(savedata);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while saving pet data", error });
  }
});

module.exports = router;
