const express = require('express');
const gigController = require('../controllers/gigController');
const instController = require('../controllers/instController');
const playerController = require('../controllers/playerController');
const venueController = require('../controllers/venueController');
const router = express.Router();

//Gig Routes
router.post('/gig', gigController.createGig, (req, res) => {
  console.log('Hello from gigRoutes post');
  return res.status(201).json(res.locals);
});

router.get('/gig', gigController.getGig, (req, res) => {
  console.log('Hello from gigRoutes get');
  return res.status(200).json(res.locals);
});

router.patch('/gig', gigController.updateGig, (req, res) => {
  return res.status(200).json(res.locals);
});

router.delete('/gig', gigController.deleteGig, (req, res) => {
  return res.status(200).json(res.locals);
});

//Instrument routes
router.post('/instrument', instController.createInstrument, (req, res) => {
  console.log('Hello from instRoutes post');
  return res.status(201).json(res.locals);
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

router.get('/', playerController.getAllPlayers, (req, res) => {
  console.log('Hello from getting all players');
  return res.status(200).json(res.locals);
});

router.get('/player', playerController.getPlayer, (req, res) => {
  console.log('Hello from playerRoutes get');
  return res.status(200).json(res.locals);
});

router.patch('/player', playerController.updatePlayer, (req, res) => {
  console.log('Hello from playerRoutes update');
  return res.status(200).json(res.locals);
});

router.delete('/player', playerController.deletePlayer, (req, res) => {
  return res.status(200).json(res.locals);
});

//Venue Routes
router.get('/venue', venueController.getVenue, (req, res) => {
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
