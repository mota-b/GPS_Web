var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");

// route to login page
router.get('/', auth.login);

// route for login action
router.post('/', auth.doLogin);

module.exports = router;
