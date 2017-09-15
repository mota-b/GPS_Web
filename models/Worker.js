var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var WorkerSchema = new Schema({
    //required
    firstName: String,
    lastName: String,
    socity: String,
    traceData: String,
    
    //not required
    address: String
    
});



module.exports = mongoose.model('Worker', WorkerSchema);
