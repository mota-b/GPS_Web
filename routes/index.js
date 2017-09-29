var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");

// restrict index for logged in user only
router.get('/', auth.index);

// route for logout action
router.get('/logout', auth.logout);

module.exports = router;
