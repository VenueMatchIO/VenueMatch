const Instrument = require('../Models/instModel.js');

const instController = {};

instController.getInstrument = async (req, res, next) => {
  const {instrument_id: instrumentId} = req.query;
  if (!instrumentId) {
    return next({
      log: 'No instrument id given',
      status: 400,
      message: {
        err: 'Error in getInstrument method of instrumentController on instrument id',
      },
    });
  }
  try {
    const instruments = await Instrument.getInstrument(instrumentId);
    res.locals = instruments;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getInstrument method of instrumentController',
      },
    });
  }
};

instController.getInstruments = async (req, res, next) => {
  try {
    const instruments = await Instrument.getInstruments();
    res.locals = instruments;
    return next();
  } catch (error) {
    return next({
      error: error,
      status: 400,
      message: {
        err: 'Error getting instruments from DB in getInstruments method on instController',
      },
    });
  }
};

instController.createInstrument = async (req, res, next) => {
  const {name} = req.body;
  if (!name) {
    return next({
      log: 'Missing field for createInstrument',
      status: 400,
      message: {
        err: 'Error in the createInstrument method of the instrumentController',
      },
    });
  }
  console.log('Creating a new instrument...');
  const newInstrument = new Instrument(name);
  try {
    newInstrument.createInstrument();
    res.locals = newInstrument;
    console.log('New instrument created: ', newInstrument);
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createInstrument method of the instrumentController',
      },
    });
  }
};

instController.updateInstrument = async (req, res, next) => {
  return next();
};

instController.deleteInstrument = async (req, res, next) => {
  const {instrumentId} = req.body;
  if (!instrumentId) {
    return next({
      error: 'no instrumentId given for the deletion',
      status: 400,
      message: {err: 'error in deleteInstrument method of instController, no instrumentId'},
    });
  }
  try {
    const response = await Instrument.deleteInstrument(instrumentId);
    res.locals = response;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      error: error,
      status: 400,
      message: {
        err: 'error in trying to delete from DB from deleteInstrument method of instController',
      },
    });
  }
};

instController.getInstrumentsByPlayer = async (req, res, next) => {
  const {id: playerId} = req.params;
  if (!playerId) {
    return next({
      error: 'no playerId in req params',
      status: 400,
      message: {err: 'Error in getInstrumentByPlayer method of instController'},
    });
  }

  try {
    const response = await Instrument.getInstrumentByPlayer(playerId);
    res.locals = response;
    return next();
  } catch (error) {
    return next({
      error: error,
      status: 400,
      message: {err: 'error writing grabbing player by instrument from DB'},
    });
  }
};

module.exports = instController;
