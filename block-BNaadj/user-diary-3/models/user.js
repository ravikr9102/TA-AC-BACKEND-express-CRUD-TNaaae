var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, require: true},
    email: { type: String, require: true},
    age: { type: Number, default: 18},
    address: String,
    bio: String,
    hobbies: String
},{ timestamps: true });

module.exports = mongoose.model('User',userSchema);