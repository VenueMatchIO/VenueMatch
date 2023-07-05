const Gig = require('../Models/gigModel.js');

const gigController = {};

gigController.createGig = async (req, res, next) => {
  const {name, venue, date, instruments} = req.body;
  if (!name || !venue || !date || !instruments) {
    return next({
      log: 'Missing field for the create gig method',
      status: 400,
      message: {err: 'Error in the createGig method of the gigController'},
    });
  }
  console.log('Creating a new gig...');
  const newGig = new Gig(name, venue, date, instruments);
  try {
    const gigID = await newGig.createGig();
    res.locals = gigID;
    console.log('Created new gig ', newGig);
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createGig method of the gigController',
      },
    });
  }
};

gigController.getGig = async (req, res, next) => {
  const {id: gigId} = req.params;
  if (!gigId) {
    return next({
      log: 'No gig ID provided',
      status: 400,
      message: {
        err: 'Error in getGig method of gigController on gigId',
      },
    });
  }
  try {
    const gigs = await Gig.getGigDetails(gigId);
    res.locals = gigs;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getGig method of gigController',
      },
    });
  }
};

gigController.getGigs = async (req, res, next) => {
  try {
    const gigs = await Gig.joinGigVenue();
    res.locals = gigs;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getGig method of gigController',
      },
    });
  }
};

gigController.updateGig = async (req, res, next) => {
  return next();
};

gigController.deleteGig = async (req, res, next) => {
  return next();
};

module.exports = gigController;
