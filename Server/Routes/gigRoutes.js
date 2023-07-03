const express = require('express');
const gigControllers = require('../Controllers/gigController');
const router = express.Router();

router.post('/', gigControllers.createGig, (req, res) => {
  console.log('Hello from gigRoutes post');
  return res.status(200).json(res.locals.gig);
});

router.get('/:venue/:date', gigControllers.getGig, (req, res) => {
  console.log('Hello from gigRoutes get');
  return res.status(200).json(res.locals.gig);
});

module.exports = router;
