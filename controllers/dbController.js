/**
 * Module dependencies.
 */
var mongoose = require("mongoose");

/**
 * Models
 */
var User = require("../models/User");
var Socity = require("../models/Socity");
var Worker = require("../models/Worker");
var TraceData = require("../models/TraceData");


/**
 * Functions
 */
module.exports = {
    
    // Add a socity
    add_socity: function (req, res) {
        var socity = {
            name: req.body.socity_name,
            admin: req.body.socity_admin,
            managers: [],
            workers: [],

            address: req.body.socity_address
        }

        var data = new Socity(socity);
        data.save();

        //Link the admin to the socity
        User.findById(data.admin, function(err, admin){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.redirect("/admin");
            }
            
            admin.socities.push(data._id);
            admin.save();
        });

        res.redirect("/admin");
    },

    // Add manager
    add_manager: function (req, res) {
        
        /* Create and register the manager */
        var manager_temp = { 
            username : req.body.manager_username, 
            pseudo: req.body.manager_pseudo, 
            isAdmin: false, 
            isManager: true, 
        }
        var manager = new User(manager_temp);
        manager.socities.push(req.body.manager_socity);

        User.register(manager, req.body.manager_password, function(err, user) {
            if (err) {
                console.log("register errr");
                console.log(err);
                res.redirect("/admin");
            }
        });
        manager.save();

        //Link the Socity to the Manager
        Socity.findById(req.body.manager_socity, function(err, socity){
            if(err) {
                console.log(" find sociity err");
                res.redirect("/admin");
            }
            
            socity.managers.push(manager._id);
            socity.save();
        });

        res.redirect("/admin");
    },
    
    // Get socities
    get_socities: function (req, res) {
        
        Socity.find({admin: req.query.id},function(err, socities){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json([]);
            }
            res.json( socities );
        });
    },

    // Get Managers
    get_managers: function (req, res) {
        User.find({socities: [req.query.id]},function(err, managers){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json([]);
            }
            res.json( managers );
        });
    },

    // Get Managers
    dell_user: function (req, res) {
        /* Dellete links between the user and his socity */
        Socity.find({managers: req.query.id},function(err, socities){
            if (err) {
                console.log("find errr");
                console.log(err);
            }
            else{
                socities.forEach(function(socity) {
                    var i = socity.managers.indexOf(req.query.id);
                    socity.managers.splice(i, 1);
                    socity.save();
                }) 
            }
        });
        
        /** Dellete the user */
        User.findByIdAndRemove(req.query.id).exec();
        
        res.redirect('/admin');
    },

    // get
    findById: function (req, res, id) {
        var u;
        User.findById(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            u = user;
            /* res.json( user ); */
            /* console.log(users) */
        });
        console.log(u)
    },
}

