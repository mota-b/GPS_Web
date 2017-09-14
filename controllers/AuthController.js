/**
 * Module dependencies.
 */
var mongoose = require("mongoose");
var passport = require("passport");
var site_url = require("../urls").site;

/**
 * Models.
 */
var User = require("../models/User");

/**
 * Local Methodes.
 */
// Test the local Session
var isSessionActive = function(user) {
  return user != undefined;
};

/**
 * Functions.
 */
module.exports = {
  
  // Restrict access to root page
  home : function(req, res) {
    var user = '';
    if (isSessionActive(req.user)) 
      user = req.user;
    
    res.render('index', { user : user, site: site_url});
  },

  // Restrict access to registration page
  register : function(req, res) {
    if (isSessionActive(req.user)) 
      res.redirect('/');
    else
      res.render('log_register/register', { user : '', site: site_url});
  },

  // Post registration
  doRegister : function(req, res) {
    User.register(new User({ username : req.body.username, pseudo: req.body.pseudo, isAdmin: false, isManager: false }), req.body.password, function(err, user) {
      if (err) {
        return res.render('log_register/register', { user : user , site: site_url});
      }

      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    });
  },

  // Restrict access to login page
  login : function(req, res) {
    if (isSessionActive(req.user)) 
      res.redirect('/');
    else
      res.render('log_register/login', { user : req.user , site: site_url});
  },

  // Post login
  doLogin : function(req, res) {
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  },

  // Restrict access to Admin page
  adminPage : function(req, res) {
    if (isSessionActive(req.user)){
      User.findById(req.user._id, function(err, doc){
        if(err) throw err; 
        
        if(doc.isAdmin)
          res.render('profile/admin0', { user : req.user, site: site_url});
        else
          res.redirect('/user');
      });
    }   
    else
      res.redirect('/');
  },

  // Restrict access to Personal page
  myPage : function(req, res) {
    if (isSessionActive(req.user)){
      User.findById(req.user._id, function(err, doc){
        if(err) throw err; 
        res.render('profile/user', { user : req.user, site: site_url});
      });
    }   
    else
      res.redirect('/');
  },

  // logout
  logout : function(req, res) {
    req.logout();
    res.redirect('/');
  }

}
