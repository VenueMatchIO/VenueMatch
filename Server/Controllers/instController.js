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

module.exports = instController;
