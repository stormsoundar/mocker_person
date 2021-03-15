const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  address_line_1: {
    type: String,
    required: true,
  },
  address_line_2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

module.exports = addressSchema;
