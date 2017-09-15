var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

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

//TraceDataSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('TraceData', TraceDataSchema);
