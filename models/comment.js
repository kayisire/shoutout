let mongoose = require("mongoose");

let requirementString = {
    type : String,
    require: true
}

let commentSchema = new mongoose.Schema({
    comment : requirementString,
    timestamp : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema)