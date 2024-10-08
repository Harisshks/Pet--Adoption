const express = require('express');
const router = express.Router();
const { getPets, addPet, deletePet } = require('../controllers/petController');

// Routes
router.route('/').get(getPets).post(addPet); // Fetch all pets and add a new pet
// router.route('/:id').delete(deletePet); // Delete a pet by ID

router.route('/:name').delete(deletePet); // Delete a pet by name
module.exports = router;



