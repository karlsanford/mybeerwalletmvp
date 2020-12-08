const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    username: { type: String, unique:true, required:true, dropDups:true},
    password: String   
})

module.exports = mongoose.model('User',userSchema)