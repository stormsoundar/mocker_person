const mongoose = require("mongoose");
const addressSchema = require("./addressSchema");
const personSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
});

const Person = mongoose.model("persons", personSchema);

module.exports = Person;
