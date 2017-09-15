var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var WorkerSchema = new Schema({
    //required
    firstName: String,
    lastName: String,
    socity: String,
    traceData: String,
    
    //not required
    adress: String
    
});

//WorkerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Worker', WorkerSchema);
