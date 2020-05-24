const Router = require("express");
const TopicRoute = require("./Topics");
const CommentRoute = require("./Comments");

const router = Router();

/**
 * Route handling topic actions
 * @name /v1/topic
 * @function
 * @param {string} path - Express path
 * @access Public
 */

router.use("/topic", TopicRoute);

/**
 * Route handling commenting actions
 * @name /v1/comment
 * @function
 * @param {string} path - Express path
 * @access Public
 */

router.use("/comment", CommentRoute);

module.exports = router;
