const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3000;
const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/user.js');

/**
 * handle parsing request body
 */

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/', express.static(path.join(__dirname, '../dist')));
} else {
  app.use(express.static(path.join(__dirname, '../client/src')));
}
// Connect Routes
app.use('/api/user', userRouter, (req, res) => {
  return res.sendStatus(200);
});

app.use('/api', apiRouter, (req, res) => {
  console.log('api hit');
  return res.sendStatus(200);
});

app.use('/', (req, res) => {
  return res.sendStatus(200);
});

// catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.get((req, res) => {
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
