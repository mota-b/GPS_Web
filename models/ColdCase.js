var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ColdCaseSchema = new Schema({
    //required
    firstName: String,
    lastName: String,
    socity: String,

    traceData: {
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
        }]
    } 
});



module.exports = mongoose.model('ColdCase', ColdCaseSchema);
