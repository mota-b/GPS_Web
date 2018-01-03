/**
 * Requires
 */
var express = require('express');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function(app){
    
    app.use(passport.initialize());
    app.use(passport.session());

    /**
     * Passport Config
     */
    var User = require('../model/db_model/User');
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());



}