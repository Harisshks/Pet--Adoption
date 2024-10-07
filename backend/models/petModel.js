const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petimg: {
    type: String, // URL to the image
    required: true,
  },
  petname: {
    type: String,
    required: true,
  },
  petid: {
    type: String,
    required: true,
  },
  petbreed: {
    type: String,
    required: true,
  },
  petage: {
    type: String,
    required: true,
  },
});

const Pets = mongoose.model("Pets", petSchema);
module.exports = Pets;
