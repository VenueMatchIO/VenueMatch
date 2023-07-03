const Models = require('../Models/models');
const Player = Models.player;

const playerController = {
  async createPlayer(req, res, next) {
    try {
      console.log('logging from createPlayer');
      console.log('req body looks like: ', req.body);
      const newPlayer = await Player.create({
        name: req.body.name,
        // do we need instruments at some point??
      });
      console.log('newPlayer: ', newPlayer);
      res.locals.player = newPlayer;
      return next();
    } catch (err) {
      console.log('logging error from playerController');
      return next({
        log: 'An error occurred wuthin the createPlayer controller found in playerController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to create player.' },
      });
    }
  },

  async getAllPlayers (req, res, next) {
    try {
      console.log('logging from getAllPlayers');
      const foundPlayers = await Player.find({});
      res.locals.players = foundPlayers;
      return next();
    }
    catch {
      return next({
        log: 'An error occurred wuthin the getAllPlayers controller found in playerController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to find all players.' },
      });
    }
  },

  async getPlayer(req, res, next) {
    try {
      console.log('logging from getPlayer');
      console.log('req params looks like: ', req.params);
      const foundPlayer = await Player.findOne({
        name: req.params.name
        // do we need instruments at some point?
      });

      console.log('foundPlayer: ', foundPlayer);

      res.locals.player = foundPlayer;
      return next();
    } catch {
      return next({
        log: 'An error occurred wuthin the getPlayer controller found in playerController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to find player.' },
      });
    }
  },

  async updatePlayer(req, res, next) {
    try {
      console.log("Hello from the updatePlayer method")
      console.log('req params looks like: ', req.params);
      console.log('req body looks like this: ', req.body);
      const updatedPlayer = await Player.findOneAndUpdate(
        { name: req.params.name },
        { name: req.body.name },
        { new: true }
      );

      console.log('updatedPlayer: ', updatePlayer);

      res.locals.player = updatedPlayer;
      return next();
    } catch {
      return next({
        log: 'An error occurred within the updatePlayer controller found in PlayerController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to update player.' },
      });
    }
  },

  //   async updateVenue(req, res, next) {

  //     try{

  //         const updatedVenue = await Gig.findOneAndUpdate(
  //             { venue: req.params.venue },
  //             { venue: req.body.name },
  //             { new: true }
  //         )

  //     } catch {

  //         return next({
  //             log: 'An error occurred wuthin the updateVenue controller found in gigController.js.',
  //             status: 400,
  //             message: { err: 'An error occurred when trying to update venue.' }
  //         });

  //     }
  //   },

  //   async updateDate(req, res, next) {

  //     try{

  //         const updatedDate = await Gig.findOneAndUpdate(
  //             { date: req.params.venue },
  //             { date: req.body.name },
  //             { new: true }
  //         )

  //     } catch {

  //         return next({
  //             log: 'An error occurred wuthin the updateDate controller found in gigController.js.',
  //             status: 400,
  //             message: { err: 'An error occurred when trying to update date.' }
  //         });

  //     }
  //   },

  async deleteGig(req, res, next) {
    try {
      const deletedStudent = Gig.findOneAndDelete(
        { venue: req.params.venue },
        { date: req.params.date }
      );

      res.locals.gig = deletedStudent;
      next();
    } catch {
      return next({
        log: 'An error occurred within the deleteGig controller found in gigController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to delete gig.' },
      });
    }
  },
};

module.exports = playerController;
