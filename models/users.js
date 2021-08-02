const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const userSchema = Schema({
    username: { type: String, unique: true, require: true, minLength: 5, maxLength: 20},
    email: {type: String, unique: true, require: true},
    password: {type: String, require: true, minLength: 8},
    userTypeId: {type: Number, require: true, default: 2}
})

const User = mongoose.model('User', userSchema)

module.exports = User;