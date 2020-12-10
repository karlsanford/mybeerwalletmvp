const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    username: { type: String, unique:true, required:true, dropDups:true},
    password: { type: String, required:true},
    authToken: { type: String},
    roles: {type: Array, default: ['USER'] }
})

module.exports = mongoose.model('User',userSchema)