const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel'); // Adjust path if needed

// POST route to handle contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, phone, petId, petName, message } = req.body;

  try {
    // Create a new Contact entry
    const newContact = new Contact({
      name,
      email,
      phone,
      petId,
      petName,
      message,
    });

    // Save to the database
    const savedContact = await newContact.save();

    res.status(201).json({ message: 'Form submitted successfully', data: savedContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting the form' });
  }
});

module.exports = router;
