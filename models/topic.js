const mongoose = require("mongoose");
// const Comment = require('./comment')/

let requirementString = {
    type : String,
    require: true
}

const topicSchema = new mongoose.Schema({
    title: requirementString,
    content : requirementString,
    status : requirementString,
    timestamp : {
        type : Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Topic", topicSchema)