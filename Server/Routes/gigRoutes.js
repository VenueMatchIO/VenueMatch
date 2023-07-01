const express = require('express');
const gigControllers = require('../Controllers/gigController');
const router = express.Router();

router.post('/', gigController.createGig, (req, res) => {
  return res.status(200).json(res.locals.gig);
});

router.get('/:venue/:date', gigController.getGig, (req, res) => {
  return res.status(200).json(res.locals.gig);
});

module.exports = router;
