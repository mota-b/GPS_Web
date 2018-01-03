/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * Mongoose Data Base
 */
require('./plugins/Mongo')();

/**
 * Express SetUp
 */ 
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

/**
 * Passport
 */
require('./plugins/Passport')(app);

/**
 * Routers init
 */
require('./plugins/Router')(app); 

/**
 * Error handeling
 */
require('./plugins/ErrHundler')(app);

module.exports = app;