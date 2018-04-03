const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    name:  String,
    password: String,
    email:   String
});

mongoose.model('users', userSchema)
