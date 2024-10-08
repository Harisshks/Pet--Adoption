// const express = require("express");
// const router = express.Router();
// const Pets = require("../models/petModel");
// const multer = require("multer");
// const path = require("path");

// // Configure multer to store images in the 'uploads' folder
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   }
// });

// const upload = multer({ storage: storage });
 
// // GET all pets
// router.get("/all", async (req, res) => {
//   try {
//     const fetchedpets = await Pets.find();
//     res.status(200).json(fetchedpets);
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred while fetching pets", error });
//   }
// });

// // POST to add a new pet (with image upload)
// router.post("/add", upload.single('petimg'), async (req, res) => {
//   try {
//     const { petname, petid, petbreed, petage } = req.body;
//     if (!req.file || !petname || !petid || !petbreed || !petage) {
//       return res.status(400).json({ message: "All pet details and image are required" });
//     }

//     const petimg = req.file.path; // Path to the uploaded image
//     const newPet = new Pets({ petimg, petname, petid, petbreed, petage });
//     const savedPet = await newPet.save();
//     res.status(201).json(savedPet);
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred while saving pet data", error });
//   }
// });

// // DELETE a pet
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const petId = req.params.id;
//     const deletedPet = await Pets.findByIdAndDelete(petId);
//     if (!deletedPet) {
//       return res.status(404).json({ message: "Pet not found" });
//     }
//     res.status(200).json({ message: "Pet deleted successfully", deletedPet });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred while deleting the pet", error });
//   }
// });

// module.exports = router;
// routes/PetRoute.js




// const express = require('express');
// const Pet = require('../models/PetModel');

// const router = express.Router();

// // GET all pets
// router.get('/', async (req, res) => {
//   try {
//     const pets = await Pet.find();
//     res.status(200).json(pets);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving pets' });
//   }
// });

// // GET a pet by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const pet = await Pet.findOne({ id: req.params.id });
//     if (!pet) {
//       return res.status(404).json({ message: 'Pet not found' });
//     }
//     res.status(200).json(pet);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving pet' });
//   }
// });

// // POST a new pet
// router.post('/', async (req, res) => {
//   const { id, name, breed, age, image } = req.body;

//   if (!id || !name || !breed || !age || !image) {
//     return res.status(400).json({ message: 'Please fill in all fields' });
//   }

//   try {
//     const newPet = new Pet({ id, name, breed, age, image });
//     await newPet.save();
//     res.status(201).json(newPet);
//   } catch (error) {
//     if (error.code === 11000) { // Duplicate ID
//       return res.status(400).json({ message: 'Pet ID must be unique' });
//     }
//     res.status(500).json({ message: 'Error adding pet' });
//   }
// });

// // DELETE a pet
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedPet = await Pet.findOneAndDelete({ id: req.params.id });
//     if (!deletedPet) {
//       return res.status(404).json({ message: 'Pet not found' });
//     }
//     res.status(200).json({ message: 'Pet deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting pet' });
//   }
// });

// // Update a pet
// router.put('/:id', async (req, res) => {
//   const { name, breed, age, image } = req.body;

//   try {
//     const updatedPet = await Pet.findOneAndUpdate(
//       { id: req.params.id },
//       { name, breed, age, image },
//       { new: true }
//     );

//     if (!updatedPet) {
//       return res.status(404).json({ message: 'Pet not found' });
//     }

//     res.status(200).json(updatedPet);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating pet' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Pets = require('../models/petModel'); // Ensure your model is correctly named for pets

// Fetch all pets
router.get('/all', async (req, res) => {
    try {
        const fetchedPets = await Pets.find(); // Fetch all pets
        res.status(200).json(fetchedPets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pets', error });
    }
});

// Add a new pet
router.post('/add', async (req, res) => {
    try {
        const newPetData = new Pets(req.body); // Create a new pet document
        const { name, breed, age, description, image } = newPetData; // Destructure the required fields

        // Validate required fields
        if (!name || !breed || !age || !description || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const savedPet = await newPetData.save(); // Save the pet document
        res.status(201).json(savedPet); // Respond with the saved pet
    } catch (error) {
        res.status(500).json({ message: 'Error adding pet', error });
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the pet ID from the request parameters
        const currentPet = await Pets.findOne({ _id: id }); // Find the current pet

        // Check if the pet exists
        if (!currentPet) {
            return res.status(404).json({ message: 'Pet not found!' });
        }

        const updatedPet = await Pets.findByIdAndUpdate(id, req.body, { new: true }); // Update the pet
        res.status(200).json(updatedPet); // Respond with the updated pet
    } catch (error) {
        res.status(500).json({ message: 'Error updating pet', error });
    }
});

// Delete a pet by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the pet ID from the request parameters
        const currentPet = await Pets.findOne({ _id: id }); // Find the current pet

        // Check if the pet exists
        if (!currentPet) {
            return res.status(404).json({ message: 'Pet not found!' });
        }

        await Pets.findByIdAndDelete(id); // Delete the pet
        res.status(200).json({ message: 'Pet deleted!' }); // Respond with success message
    } catch (error) {
        res.status(500).json({ message: 'Error deleting pet', error });
    }
});

module.exports = router;
