const express = require('express');
const playerControllers = require('../Controllers/playerController.js');
const router = express.Router();

router.post('/', playerControllers.createPlayer, (req, res) => {
  console.log('Hello from playerRoutes post');
  return res.status(200).json(res.locals.player);
});

router.get('/', playerControllers.getAllPlayers, (req, res) => {
  console.log('Hello from getting all players');
  return res.status(200).json(res.locals.players);
})

router.get('/:name', playerControllers.getPlayer, (req, res) => {
  console.log('Hello from playerRoutes get')
  return res.status(200).json(res.locals.player);
});

router.patch('/:name', playerControllers.updatePlayer, (req, res) => {
    console.log('Hello from playerRoutes update')
    return res.status(200).json(res.locals.player);
  });

// router.delete('/:name', playerControllers.)

module.exports = router;
