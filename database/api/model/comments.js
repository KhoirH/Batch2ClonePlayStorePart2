const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId : {
        type : String
    },
    itemId : {
        type : String 
    },
    value :{
        type  : String
    } 
});

const Comments = mongoose.model("Comment" , CommentSchema);

module.exports = Comments