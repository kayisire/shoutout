/**
 * Importing models
 */

const Comment = require("../models/Comment");

/**
 * Specifying our class name for debugging reasons
 */

const className = "CommentController";

class CommentController {
  /**
   * Creating a Comment record in the DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Obeject with HTTP status
   */
  static async createOneComment(req, res) {
    try {
      //Creating one Topic record
      const CommentRecord = new Comment({
        content: req.body.content,
        TopicRefID: req.params.topic
      });
      const newComment = await CommentRecord.save();
      res.status(201).json(newComment);
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: createOneComment() \nERROR: ${err}`
      );
    }
  }

  /**
   * Display all Comment records per Topic in the DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Obeject with HTTP status
   */
  static async getAllComments(req, res) {
    try {
      const CommentRecord = Comment.find()
        .where("TopicRefID")
        .equals(req.params.topic);
      res.status(201).json(CommentRecord);
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: getAllComments() \nERROR: ${err}`
      );
    }
  }

  /**
   * Delete one Comment record by ID from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static async deleteOneComment(req, res) {
    try {
      // Deleting one Comment record
      await Comment.findByIdAndUpdate(
        { _id: req.params.id },
        { isDeleted: true },
        { new: true }
      );
      res.json({ message: "Comment Deleted Successfully" });
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: deleteOneComment() \nERROR: ${err}`
      );
    }
  }
}

module.exports = CommentController;
