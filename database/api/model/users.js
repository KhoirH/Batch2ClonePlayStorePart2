const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    email : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    }
 });

const Users = mongoose.model('Users' , usersSchema)

 module.exports = Users;