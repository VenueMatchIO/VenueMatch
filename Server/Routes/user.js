const express = require('express');
const router = express.Router();

router.get('/data', (req, res, next) => {
  res.sendStatus(200);
});

router.get('/session', (req, res, next) => {
  res.sendStatus(200);
});

module.exports = userRouter;