const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 3000;
const playerRoutes = require('./Routes/playerRoutes.js');
const gigRoutes = require('./Routes/playerRoutes.js');
const instRoutes = require('./Routes/playerRoutes.js');

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect Routes
// app.use('/players', playerRoutes);
// app.use('/gigs', gigRoutes);
// app.use('/inst', instRoutes);

// catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
