const mongoose = require('../db/connection');

const burgerSchema = new mongoose.Schema(
  {
    patty: String,
    cheese: Boolean,
    toppings: [String]
  },
);

module.exports = mongoose.model('Burger', burgerSchema);
