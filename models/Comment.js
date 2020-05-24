const mongoose = require("mongoose");

let requiredString = {
  type: String,
  require: true,
};

const CommentSchema = mongoose.Schema(
  {
    content: requiredString,
    TopicRefID: requiredString,
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

CommentSchema.index({ "$**": "text" });

module.exports = mongoose.model("Comments", CommentSchema);
