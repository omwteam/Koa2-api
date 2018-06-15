const mongoose = require('mongoose');
const db = require("../../utils/MgDb");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: '小明'
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
});


const Users = mongoose.model('User',UserSchema);

module.exports = Users;