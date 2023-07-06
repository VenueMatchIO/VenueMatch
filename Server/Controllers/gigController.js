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
  try {
  } catch (error) {}

  return next();
};

gigController.updateGigPlayer = async (req, res, next) => {
  const {gigId, playerId, instrumentId} = req.body;
  console.log(gigId, playerId, instrumentId);
  if (!gigId || !playerId || !instrumentId) {
    return next({
      error: 'missing field for updateGig',
      status: 400,
      message: {
        err: 'Missing gigId or playerId in reqbody of updateGig method on gigController',
      },
    });
  }

  try {
    const response = await Gig.fillGigPlayer(gigId, playerId, instrumentId);
    res.locas = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {
        err: 'Error in the updateGigPlayer method in the gigController',
      },
    });
  }
};

gigController.deleteGig = async (req, res, next) => {
  const {gigId} = req.body;
  if (!gigId) {
    return next({
      error: 'no gigId given for the deletion',
      status: 400,
      message: {err: 'error in deleteGig method of gigController, no gigId'},
    });
  }
  try {
    const response = await Gig.deleteGig(gigId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {
        err: 'error in trying to delete from DB from deleteGig method of gigController',
      },
    });
  }
};

gigController.addInstrument = async (req, res, next) => {
  const {instrumentId, gigId} = req.body;

  if (!instrumentId || !gigId) {
    return next({
      error: 'error in the addInstrument method of the gigController',
      status: 400,
      message: {
        err: 'error in the addInstrument method of the gigController, missing fields ',
      },
    });
  }

  try {
    const response = await Gig.insertInstrument(instrumentId, gigId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {
        err: 'error in the addInstrument method posting data to DB of gigController',
      },
    });
  }
};

gigController.removeInstrument = async (req, res, next) => {
  console.log(req.body);
  const {joinId} = req.body;
  if (!joinId) {
    return next({
      error: 'error in the removeInstrument method of the gigController',
      status: 400,
      message: {
        err: 'error in the removeInstrument method of the gigController, missing fields ',
      },
    });
  }

  try {
    const response = await Gig.removeInstrument(joinId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {
        err: 'error in the removeInstrument method deleting data from DB of gigController',
      },
    });
  }
};

module.exports = gigController;
