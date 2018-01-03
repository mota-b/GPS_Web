var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");

// route to login page
router.get('/', auth.login);

// route for login action
router.post('/log_me', auth.doLogin);

// route for register action
router.post('/register_me', auth.doRegister);

module.exports = router;
