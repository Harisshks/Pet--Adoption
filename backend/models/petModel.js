const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false, // Not all pets may have images
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
