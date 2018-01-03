var express = require('express');
var router = express.Router();

// Get index
router.get('/', function(req, res){
    res.redirect("http"+require('../package.json').links.view);
});

module.exports = router;
