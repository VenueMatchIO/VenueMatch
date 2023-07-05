const express = require('express');
const gigControllers = require('../Controllers/gigController');
const instController = require('../Controllers/instController');
const playerController = require('../Controllers/playerController');
const venueController = require('../Controllers/venueController');
const router = express.Router();

//Gig Routes
router.post('/gig', gigControllers.createGig, (req, res) => {
  console.log('Hello from gigRoutes post');
  return res.status(200).json(res.locals.gig);
});

router.get('/gig', gigControllers.getGig, (req, res) => {
  console.log('Hello from gigRoutes get');
  return res.status(200).json(res.locals.gig);
});

router.patch();

router.delete();

//Instrument routes
router.post('/instrument', instControllers.createInstrument, (req, res) => {
  console.log('Hello from instRoutes post');
  return res.status(200).json(res.locals);
});

router.get('/instrument', instControllers.getInstrument, (req, res) => {
  console.log('Hello from instRoutes get');
  return res.status(200).json(res.locals);
});

router.patch('/instrument', instControllers.updateInstrument, (req, res) => { 
  return res.status(200).json(res.locals);
})

router.delete('/instrument', instControllers.deleteInstrument, (req, res ) => {
  return res.status(200).json(res.locals);
})

//Player Routes
router.post('/player', playerControllers.createPlayer, (req, res) => {
  console.log('Hello from playerRoutes post');
  return res.status(200).json(res.locals.player);
});

router.get('/', playerControllers.getAllPlayers, (req, res) => {
  console.log('Hello from getting all players');
  return res.status(200).json(res.locals.players);
})

router.get('/player', playerControllers.getPlayer, (req, res) => {
  console.log('Hello from playerRoutes get')
  return res.status(200).json(res.locals.player);
});

router.patch('/player', playerControllers.updatePlayer, (req, res) => {
    console.log('Hello from playerRoutes update')
    return res.status(200).json(res.locals.player);
  });

router.delete('player', playerControllers.deletePlayer, (req, res) => {
  return res.status(200).json(res.locals.player)
})

//Venue Routes
router.get();

router.post();

router.patch();

router.delete();

module.exports = apiRouter;
