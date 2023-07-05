const Venue = require('../Models/venueModel');

const venueController = {};

venueController.createVenue = async (req, res, next) => {
  const {name, location} = req.body;
  if (!name || !location) {
    return next({
      log: 'Missing field for createVenue',
      status: 400,
      message: {
        err: 'Error in the createVenue method of the venueController',
      },
    });
  }
  const newVenue = new Venue(name, location);
  console.log('Creating a new venue...');
  try {
    newVenue.createVenue();
    res.locals = newVenue;
    console.log('New venue created successfully', newVenue);
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createVenue method of the venueController',
      },
    });
  }
};

venueController.getVenue = async (req, res, next) => {
  const {venue_id: venueId} = req.query;
  if (!venueId) {
    return next({
      log: 'No venue Id given',
      status: 400,
      message: {
        err: 'Error in the getVenue method of venueController on venue Id',
      },
    });
  }
  try {
    const venues = await Venue.getVenue(venueId);
    res.locals = venues;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createVenue method of the venueController',
      },
    });
  }
};

venueController.updateVenue = async (req, res, next) => {
  return next();
};

venueController.deleteVenue = async (req, res, next) => {
  return next();
};

module.exports = venueController;
