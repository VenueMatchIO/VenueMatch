const express = require('express');
const playerControllers = require('../Controllers/playerController.js');
const router = express.Router();

// router.get('/<LOCATION>', playerController.<FUNCTION NAME>, (req, res) => {
//     return res.status(200).json(res.locals.<LOCATION>)
// })

module.exports = router;
