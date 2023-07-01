const Models = require('../Models/models');
const Player = Models.player;

const playerController = {};
//make the controller
playerController.getPlayers = async (req, res, next) => {
  try {
    const thePlayers = await Player.find().exec();
    next();
  } catch (err) {
    next;
  }
};

module.exports = playerController;
