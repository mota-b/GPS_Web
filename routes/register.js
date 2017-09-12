var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");

// route to register page
router.get('/', auth.register);

// route for register action
router.post('/', auth.doRegister);

module.exports = router;
