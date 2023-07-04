const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const playerRoutes = require('./Routes/playerRoutes.js');

// connectToDb();
/**
 * handle parsing request body
 */

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/', express.static(path.join(__dirname, '../dist')));
}
// Connect Routes
app.use('/players', playerRoutes);
//app.use('/gigs', gigRoutes);
// app.use('/inst', instRoutes);

// catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use('*', (req, res) => {
  return res.status(404).send("This is not the page you're looking for...");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
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
