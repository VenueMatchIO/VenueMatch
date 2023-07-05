const Player = require('../Models/playerModel.js');

const playerController = {};

playerController.createPlayer = async (req, res, next) => {
  const {name, instruments} = req.body;
  if (!name || !instruments) {
    return next({
      log: 'Missing field for the createPlayer method',
      status: 400,
      message: {err: 'Error in the createPlayer method of playerController'},
    });
  }
  console.log('Creating a new player...');
  const newPlayer = new Player(name, instruments);
  try {
    newPlayer.createPlayer();
    console.log('New player created successfully: ', newPlayer);
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createPlayer method of playerController',
      },
    });
  }
};

playerController.getPlayer = async (req, res, next) => {
  const {player_id: playerId} = req.query;
  if (!playerId) {
    return next({
      log: 'No player ID provided',
      status: 400,
      message: {
        err: 'Error in getPlayer method of playerController on player ID',
      },
    });
  }
  try {
    const players = await Player.getPlayer(playerId);
    res.locals = players;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getPlayer method of playerController',
      },
    });
  }
};

module.exports = playerController;
