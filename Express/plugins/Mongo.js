
/**
 * Requires 
 */
var mongoose = require('mongoose');

module.exports = function(){
    mongoose.Promise = global.Promise;
    var db_url = require('../package.json').links.local_db;
    
    mongoose
    .connect(db_url, { useMongoClient: true })
    .then(() =>  console.log('-- Connection succesful to db: <<', db_url.split('/')[3], '>>'))
    .catch((err) => console.error(err));

}