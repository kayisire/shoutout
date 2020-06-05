/**
 * Importing models
 */

const Topic = require("../models/Topic");

/**
 * Specifying our class name for debugging reasons
 */

const className = "TopicController";

class TopicController {
  /**
   * Creating a Topic record in the DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Obeject with HTTP status
   */
  static async createOneTopic(req, res) {
    try {
      //Creating one Topic record
      const TopicRecord = new Topic({
        title: req.body.title,
        content: req.body.content,
      });
      const newTopic = await TopicRecord.save();
      res.status(201).json(newTopic);
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: createOneTopic() \nERROR: ${err}`
      );
      res.status(400).json({ message: err.message });
    }
  }

  /**
   * Retrieve all Topic records from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static async getAllTopics(req, res) {
    try {
      // Pulling all Topics
      const TopicRecord = await Topic.find();
      res.json(TopicRecord);
    } catch (err) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: getAllTopics() \nERROR: ${err}`
      );
      res.status(500).json({ message: err.message });
    }
  }

  /**
   * Retrieve one Topic record by ID from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static async getOneTopic(req, res) {
    try {
      // Pulling one Topic
      const TopicRecord = await Topic.findById(req.params.id).where("isDeleted")
      .equals("false");

      if (TopicRecord == null) {
        return res.status(404).json({ message: "Cannot find Topic Record" });
      }
      res.json(TopicRecord);
    } catch (error) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: getOneTopic() \nERROR: ${err}`
      );
      res.status(500).json({ message: err.message });
    }
  }

  /**
   * Delete one Topic record by ID from DB
   * @param {Object[]} req - Request
   * @param {Object[]} res - Response
   * @returns {Object[]} Response Object with HTTP status
   */
  static async deleteOneTopic(req, res) {
    try {
      // Deleting one Topic
      await Topic.findByIdAndUpdate(
        { _id: req.params.id },
        { isDeleted: true },
        { new: true }
      );
      res.json({ message: "Topic Deleted Successfully" });
    } catch (err) {
      console.log(
        `ERROR FOUND! \nClass: ${className} \nFunction: deleteOneTopic() \nERROR: ${err}`
      );
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = TopicController;
