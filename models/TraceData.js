var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TraceDataSchema = new Schema({
    //required
    worker: String,
    weeks: [{
        interval: {
            date1: String, 
            date2: String}, 
        locations:[{ 
            date: String,
            time: String,
            latLon:{
                latitud: String,
                longitude: String
            },
            altitude: String
        }]
    }],
       
});



module.exports = mongoose.model('TraceData', TraceDataSchema);
