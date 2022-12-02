const express = require('express');
const Burger = require('../models/burger');

const router = express.Router();


// INDEX
// GET api/jobs
router.get('/', (req, res) => {
    // Use our Job model to find all of the documents
    // in the jobs collection
    // When found, they are passed down the promise chain
    // to the `.then()` where we send the response as JSON
    // with `res.json` and pass it any jobs found
    Burger.find().then((burgers) => res.json(burgers));
  });
// SHOW
// GET api/jobs/5a7db6c74d55bc51bdf39793

router.get('/:patty', async (req, res, next) => {
	try {
		const burgerId = await Burger.find({patty: req.params.patty });
		res.json(burgerId);
	} catch (err) {
		next(err);
	}
});


// CREATE
// POST api/jobs
router.post('/', (req, res) => {
    Burger.create(req.body).then((newBurger) => res.json(newBurger));
  });


// UPDATE
// PUT api/jobs/5a7db6c74d55bc51bdf39793
router.put('/:id', (req, res) => {
  Burger.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((adjustBurger) => res.json(adjustBurger));
});


// DESTROY
// DELETE api/jobs/5a7db6c74d55bc51bdf39793
router.delete('/:id', (req, res) => {
    Burger.findOneAndDelete({
      _id: req.params.id,
    }).then((deleteBurger) => res.json(deleteBurger));
  });
module.exports = router;
