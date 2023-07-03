const Models = require('../Models/models');
const Gig = Models.gig;

const gigController = {
  async createGig(req, res, next) {
    try {
      console.log('logging from createGig');
      console.log('req body looks like: ', req.body);
      const newGig = await Gig.create({
        venue: req.body.venue,
        // date: req.body.date
      });
      console.log('newGig: ', newGig);
      res.locals.gig = newGig;
      return next();
    } catch (err) {
      console.log('logging error from gigController');
      return next({
        log: 'An error occurred wuthin the createGig controller found in gigController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to create gig.' },
      });
    }
  },

  async getGig(req, res, next) {
    try {
      console.log('logging from getGig');
      console.log('req params looks like: ', req.params);
      const foundGig = await Gig.findOne({
        venue: req.params.venue,
        date: req.params.date,
      });

      res.locals.gig = foundGig;
      return next();
    } catch {
      return next({
        log: 'An error occurred wuthin the getGig controller found in gigController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to find gig.' },
      });
    }
  },

  async updateGig(req, res, next) {
    try {
      const updatedGig = await Gig.findOneAndUpdate(
        { venue: req.params.venue },
        { venue: req.body.name },
        { date: req.params.date },
        { date: req.body.name },
        { new: true }
      );

      res.locals.gig = updatedGig;
      next();
    } catch {
      return next({
        log: 'An error occurred within the updateGig controller found in gigController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to update gig.' },
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

module.exports = gigController;
