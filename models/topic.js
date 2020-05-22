var mongoose = require("mongoose");
var Comment = require("./comment");

var requirementString = {
    type : String,
    require: true
}

var topicSchema = mongoose.Schema({
    title: requirementString,
    content : requirementString,
    comment : Comment.schema,
    status : requirementString,
    timestamp : {
        type : Date,
        default: Date.now
    }

});

var Topic = (module.export = mongoose.model("topic", topicSchema));