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

venueController.getVenues = async (req, res, next) => {
  try {
    const venues = await Venue.getVenues();
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
  const {venueId} = req.body;
  if (!venueId) {
    return next({
      error: 'No venueId in delete venue',
      status: 400,
      message: {err: 'Error in deleteVenue method of venueController'},
    });
  }

  try {
    const response = await Venue.deleteVenue(venueId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {err: 'error in deleteVenue method on venueController'},
    });
  }
};

module.exports = venueController;
