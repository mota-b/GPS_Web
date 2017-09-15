var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SocitySchema = new Schema({
    //required
    name: String,
    admin: String,
    managers: [String],
    workers: [String],
    
    //not required
    address: String
    
});


module.exports = mongoose.model('Socity', SocitySchema);
