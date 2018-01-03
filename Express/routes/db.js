var express = require('express');
var router = express.Router();
var db = require("../controller/dbController.js");


// add socity
router.post('/add_socity', db.add_socity);

// add manager
router.post('/add_manager', db.add_manager);

// add worker
router.post('/add_worker', db.add_worker);

// get socities
router.get('/get_socities', db.get_socities);

// get managers
router.get('/get_managers', db.get_managers);

// get manager
router.get('/get_manager', db.get_manager);

// get workers
router.get('/get_workers', db.get_workers);

// get worker
router.get('/get_worker', db.get_worker);

// update manager
router.post('/update_manager', db.update_manager);

// update worker
router.post('/update_worker', db.update_worker);

// dell manager
router.post('/dell_manager', db.dell_manager);

// dell worker
router.post('/dell_worker', db.dell_worker);

module.exports = router;
