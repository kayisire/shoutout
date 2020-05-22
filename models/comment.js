var mongoose = require("mongoose");

var requirementString = {
    type : String,
    require: true
}

var commentSchema = new mongoose.Schema({
    comment : requirementString,
    timestamp : {
        type : Date,
        default : Date.now
    }
});

var Comment = (module.exports = mongoose("comments", commentSchema));