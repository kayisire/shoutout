/**
 * Importing required packages and important utilities and routes
 * */

const Router = require("express");
const TopicController = require("../controllers/Topics");
const router = Router();

/**
 * Route for creating a Topic {POST}
 * @name /v1/topic
 * @param {string} path - Express path
 */
router.post("/", TopicController.createOneTopic);

/**
 * Route displaying all Topics {GET}
 * @name /v1/topic
 * @param {string} path - Express path
 */
router.get("/", TopicController.getAllTopics);

/**
 * Route displaying a single Topic  {GET}
 * @name /v1/topic/:id
 * @param {string} path - Express path
 */
router.get("/:id", TopicController.getOneTopic);

/**
 * Route for deleting a single Topic {DELETE}
 * @name /v1/topic/:id
 * @param {string} path - Express path
 */
router.delete("/:id", TopicController.deleteOneTopic);

module.exports = router;
