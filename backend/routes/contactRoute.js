// routes/contactRoute.js
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController'); // Adjust path if needed

router.route('/').post(submitContactForm);
// router.post('/contact', submitContactForm);

module.exports = router;
