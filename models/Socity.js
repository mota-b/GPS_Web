var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var SocitySchema = new Schema({
    //required
    name: String,
    admin: String,
    managers: [String],
    workers: [String],
    
    //not required
    adress: String
    
});

//SocitySchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Socity', SocitySchema);
