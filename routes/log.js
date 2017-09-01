var express = require('express');
var router = express.Router();

/* GET log page. */
router.get('/', function(req, res, next) {
  res.render('log', { title: 'Log' });
});

module.exports = router;
