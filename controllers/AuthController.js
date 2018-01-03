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
  index : function(req, res) {
    var user = '';
    if (isSessionActive(req.user)) 
      user = req.user;
    
    res.render('index/def_index', { user : user, site: site_url});
  },

  // Restrict access to registration page
  register : function(req, res) {
    if (isSessionActive(req.user)) 
      res.redirect('/');
    else
      res.render('log_register/def_register', { user : '', site: site_url});
  },

  // Post registration
  doRegister : function(req, res) {
    User.register(new User({ username : req.body.username, pseudo: req.body.pseudo, isAdmin: false, isManager: false }), req.body.password, function(err, user) {
      if (err) {
        return res.json({"v": false, "result": err});
      }else
        passport.authenticate('local')(req, res, function () {
          return res.json({"v": true, "result": "/user"});
        });
    });
  },

  // Restrict access to login page
  login : function(req, res) {
    if (isSessionActive(req.user)) 
      res.redirect('/');
    else
      res.render('log_register/def_login', { user : req.user , site: site_url});
  },

  // Post login
  doLogin : function(req, res) {
    console.log(req.body)
    passport.authenticate('local')(req, res, function (err,user) {
      
      if(!err)
        return res.json({"v": true, "result": "/user"});
    })
  
  },

  // Restrict access to Admin page
  adminPage : function(req, res) {
    if (isSessionActive(req.user)){
      User.findById(req.user._id, function(err, doc){
        if(err) throw err; 
        
        if(doc.isAdmin)
          res.render('profile/def_admin', { user : req.user, site: site_url});
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
        res.render('profile/def_user', { user : req.user, site: site_url});
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
