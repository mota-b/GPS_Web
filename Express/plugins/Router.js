
module.exports = function(app){
 
    var index = require('../routes/index');
    var db = require('../routes/db');
    var api = require('../routes/api');
    
    app.use('/', index);
    app.use('/db', db);
    app.use('/api', api);
}