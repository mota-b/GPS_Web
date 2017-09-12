var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    //required
    username: String,
    password: String,
    isAdmin: Boolean,
    isManager: Boolean,
    socities: [String],
    
    //not required
    pseudo: String
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
