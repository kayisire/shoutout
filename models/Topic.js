const mongoose = require("mongoose");
const CommentSchema = require("./Comment");

let requiredString = {
  type: String,
  require: true,
};

const TopicSchema = mongoose.Schema(
  {
    title: requiredString,
    content: requiredString,
    isDeleted: { type: Boolean, require: true, default: false },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.isActive;
        delete ret.__v;
        return ret;
      },
    },
    timestamps: true,
  }
);

TopicSchema.index({ "$**": "text" });

module.exports = mongoose.model("Topics", TopicSchema);
