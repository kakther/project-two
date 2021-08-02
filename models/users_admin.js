const mongoose = require('mongoose')

const Schema = mongoose.Schema


const adminSchema = new Schema({
    username: {type: String, require: true, unique: true, minLength: 5, maxLength: 20},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minLength: 8},
    userTypeId: {type: Number, require: true, default: 1}
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin