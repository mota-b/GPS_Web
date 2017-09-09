var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  var user = '';
  if (isSessionActive(req.user)) 
    user = req.user;
  
  res.render('index', { user : user });
};

// Go to registration page
userController.register = function(req, res) {
  if (isSessionActive(req.user)) 
    res.redirect('/');
  else
    res.render('register', { user : ''});
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  if (isSessionActive(req.user)) 
    res.redirect('/');
  else
    res.render('login', { user : req.user });
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

var isSessionActive = function(user) {
  return user != undefined;
};

module.exports = userController;
