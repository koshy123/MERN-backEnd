/// Require the Job model
const Burger = require('../models/burger');
// Require the data
const burgerData = require('../db/burgers.json')

// Delete any existing documents in the jobs collection
Burger.deleteMany()
  // Use insertMany and pass it the seed data
  .then(() => Burger.insertMany(burgerData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not
  // things worked and close our connection to the database.
  .finally(process.exit);
