var express = require('express');
var router = express.Router();
var db = require("../controllers/dbController.js");

// add socity
router.post('/add_socity', db.add_socity);

// add manager
router.post('/add_manager', db.add_manager);

// get socities
router.get('/get_socities', db.get_socities);

module.exports = router;
