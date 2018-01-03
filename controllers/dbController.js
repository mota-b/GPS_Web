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
var ColdCase = require("../models/ColdCase");


/**
 * Local methodes
 */
var save_Data = function(worker_id){
    
    var temp_coldCase = {
        firstName: '',
        lastName: '',
        socity: '',
    
        traceData: {
            weeks: []
        } 
    }

    coldCase = new ColdCase(temp_coldCase);
    

    Worker.findById(worker_id, function(err, worker){
        if (err) {
            console.log("find errr");
            console.log(err);
        }
        else{
            coldCase.firstName = worker.firstName; 
            coldCase.lastName = worker.lastName;
            coldCase.socity = worker.socity;
            coldCase.save();
        }
    });


    TraceData.find({worker: worker_id}, function(err, traceDatas){
        if (err) {
            console.log("find errr");
            console.log(err);
        }
        else{
            traceDatas.forEach(function(traceData) {
                coldCase.traceData.weeks = traceData.weeks;
                coldCase.save();
            }) 
        }
    });

}

/**
 * Functions
 */
module.exports = {
    
    // Add a socity
    add_socity: function (req, res) {
        var socity = {
            name: req.body.socity_name,
            admin: req.body.socity_admin,
            address:req.body.address,
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

    // Add worker
    add_worker: function(req, res){

        /* Create TraceData for our new worker */
        var temp_new_traceData = {
            worker: '',
            weeks: []
        }
        new_traceData = new TraceData(temp_new_traceData);

        /* Create and register the worker */
        var worker_temp = { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            socity: req.body.worker_socity,
            traceData: new_traceData._id,
            
            address: req.body.worker_address
        }
        var worker = new Worker(worker_temp);
        worker.save();

        /* Link the TraceData with it worker  */
        new_traceData.worker = worker._id;
        new_traceData.save();

        //Link the Socity to the WOrker
        Socity.findById(req.body.worker_socity, function(err, socity){
            if(err) {
                console.log(" find sociity err");
                res.redirect("/admin");
            }
            socity.workers.push(worker._id);
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
        User.find({socities: [req.query.id], isAdmin: false},function(err, managers){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json([]);
            }
            res.json( managers );
        });
    },

    // Get Manager
    get_manager: function (req, res) {
        User.findById(req.query.id,function(err, manager){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json();
            }
            res.json( manager);
        });
    },

    // Get Workers
    get_workers: function (req, res) {
        Worker.find({socity: req.query.id}, function(err, workers){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json([]);
            }
            res.json( workers );
        });
    },

    // Get Worker
    get_worker: function (req, res) {
        Worker.findById(req.query.id, function(err, worker){
            if (err) {
                console.log("find errr");
                console.log(err);
                res.json([]);
            }
            res.json( worker );
        });
    },

    // Dell manager
    dell_manager: function (req, res) {
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

    // Dell worker
    dell_worker: function (req, res) {
        /* Dellete links between the user and his socity */
        Socity.find({workers: req.query.id},function(err, socities){
            if (err) {
                console.log("find errr");
                console.log(err);
            }
            else{
                socities.forEach(function(socity) {
                    var i = socity.workers.indexOf(req.query.id);
                    socity.workers.splice(i, 1);
                    socity.save();
                }) 
            }
        });
        

        /* Save or not stat files */
        if(req.query.save == "true"){
            save_Data(req.query.id);
        }

        /* Dellete the TraceData */
        Worker.findById(req.query.id, function(err, worker){
            if (err) {
                console.log("find errr");
                console.log(err);
            }
            else {
                TraceData.findByIdAndRemove(worker.traceData).exec();
            }
        });
        
        /* Dellete the worker */
        Worker.findByIdAndRemove(req.query.id).exec();
        
        res.redirect('/admin');
    },

    // Update manager
    update_manager: function(req, res){
        User.findById(req.body.user_id, function(err, manager){
            if(err) {
                console.log(" find err");
                res.redirect("/admin");
            }
            manager.pseudo = req.body.pseudo;
            manager.save();
        });
        res.redirect("/admin");
    },

    // Update worker
    update_worker: function(req, res){
        Worker.findById(req.body.worker_id, function(err, worker){
            if(err) {
                console.log(" find err");
                res.redirect("/admin");
            }
            worker.firstName = req.body.firstName;
            worker.lastName = req.body.lastName;
            worker.address = req.body.address;
            
            worker.save();
        });
        res.redirect("/admin");
    },
}

