const Pet = require('../models/petModel');

// Get all pets
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pets' });
  }
};

// Add a new pet
const addPet = async (req, res) => {
  try {
    const { id, name, breed, age, image } = req.body;

    const pet = new Pet({
      id,
      name,
      breed,
      age,
      image,
    });

    const createdPet = await pet.save();
    res.status(201).json(createdPet);
  } catch (error) {
    res.status(400).json({ message: 'Error adding pet' });
  }
};

// Delete a pet
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
      await pet.remove();
      res.json({ message: 'Pet removed' });
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pet' });
  }
};

module.exports = {
  getPets,
  addPet,
  deletePet,
};
