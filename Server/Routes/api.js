const express = require('express');
const gigController = require('../controllers/gigController');
const instController = require('../controllers/instController');
const playerController = require('../controllers/playerController');
const venueController = require('../controllers/venueController');
const router = express.Router();

//Gig Routes

router.post(
  '/gig/instrument',
  gigController.addInstrument,
  (req, res, next) => {
    return res.status(201).json(res.locals);
  }
);

router.delete(
  '/gig/instrument',
  gigController.removeInstrument,
  (req, res, next) => {
    return res.status(201).json(res.locals);
  }
);

router.post('/gig', gigController.createGig, (req, res) => {
  console.log('Hello from gigRoutes post');
  return res.status(201).json(res.locals);
});

router.get('/gigs', gigController.getGigs, (req, res) => {
  return res.status(200).json(res.locals);
});

router.get('/gig/:id', gigController.getGig, (req, res) => {
  console.log('Hello from gigRoutes get');
  return res.status(200).json(res.locals);
});
router.patch('/gig/player', gigController.updateGigPlayer, (req, res) => {
  return res.status(200).json(res.locals);
});

router.patch('/gig', gigController.updateGig, (req, res) => {
  return res.status(200).json(res.locals);
});

router.delete('/gig', gigController.deleteGig, (req, res) => {
  return res.status(201).json(res.locals);
});

//Instrument routes

router.post('/instrument', instController.createInstrument, (req, res) => {
  console.log('Hello from instRoutes post');
  return res.status(201).json(res.locals);
});

router.get('/instruments', instController.getInstruments, (req, res) => {
  return res.status(200).json(res.locals);
});

router.get('/instrument', instController.getInstrument, (req, res) => {
  console.log('Hello from instRoutes get');
  return res.status(200).json(res.locals);
});

router.patch('/instrument', instController.updateInstrument, (req, res) => {
  return res.status(200).json(res.locals);
});

router.delete('/instrument', instController.deleteInstrument, (req, res) => {
  return res.status(200).json(res.locals);
});

//Player Routes
router.post('/player', playerController.createPlayer, (req, res) => {
  console.log('Hello from playerRoutes post');
  return res.status(201).json(res.locals);
});

router.get('/', playerController.getPlayers, (req, res) => {
  console.log('Hello from getting all players');
  return res.status(200).json(res.locals);
});

// route for getting all players and their instruments and gigs
router.get(
  '/player/:id',
  playerController.getPlayerByInstrument,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// router.get('/player/:id', playerController.getPlayers, (req, res) => {
//   console.log('Hello from playerRoutes get');
//   return res.status(200).json(res.locals);
// });

router.patch('/player', playerController.updatePlayer, (req, res) => {
  console.log('Hello from playerRoutes update');
  return res.status(200).json(res.locals);
});

router.delete('/player', playerController.deletePlayer, (req, res) => {
  return res.status(200).json(res.locals);
});

//Venue Routes
router.get('/venues', venueController.getVenues, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/venue', venueController.createVenue, (req, res) => {
  return res.status(201).json(res.locals);
});

router.patch('/venue', venueController.updateVenue, (req, res) => {
  return res.status(200).json(res.locals);
});

router.delete('/venue', venueController.deleteVenue, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;
