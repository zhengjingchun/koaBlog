const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
    userId: String,
    name: String,
    time: Date,
    title: String,
    post: String,
    tags: Array,
    comments: Array,
    pv: Number
});

mongoose.model('posts', articleSchema)
