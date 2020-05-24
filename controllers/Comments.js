/**
 * Importing models
 */

const Topic = require("../models/Topic");

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
  static createOneComment = async (req, res) => {
    try {
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: createOneComment() \nERROR: ${err}`
      );
    }
  };

  /**
   * Retrieve all Comment records from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static getAllComments = async (req, res) => {
    try {
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: getAllComments() \nERROR: ${err}`
      );
    }
  };

  /**
   * Delete one Comment record by ID from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static deleteOneComment = async (req, res) => {
    try {
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: deleteOneComment() \nERROR: ${err}`
      );
    }
  };
}

module.exports = CommentController;
