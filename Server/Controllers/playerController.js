const Player = require('../Models/playerModel.js');
const dbConfig = require('../database/db.config.js');

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
    res.locals = newPlayer;
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

playerController.getPlayers = async (req, res, next) => {
  try {
    const players = await Player.getPlayers();
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

playerController.updatePlayer = async (req, res, next) => {
  return next();
};

playerController.deletePlayer = async (req, res, next) => {
  const {playerId} = req.body;
  if (!playerId) {
    return next({
      log: 'no player ID in req body for delete',
      status: 400,
      message: {err: 'error in deletePlayer of playerController'},
    });
  }

  try {
    const response = await Player.deletePlayer(playerId);
    res.locals = response;
  } catch (error) {
    return next({
      error: error,
      status: 400,
      message: {err: 'error in deletePlayer method in playerController'},
    });
  }
  return next();
};

playerController.getPlayerByInstrument = async (req, res, next) => {
  const {id: instrumentId} = req.params;
  if (!instrumentId) {
    return next({
      err: 'error in the getPlayerDetails controller, no ID',
      status: 400,
      message: {
        err: 'Error in the getPlayerDetails method in the playerController',
      },
    });
  }
  try {
    const response = await Player.getPlayersByInstrument(instrumentId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {err: 'Error in trying to get player details from DB'},
    });
  }
};

module.exports = playerController;
