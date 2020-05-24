/**
 * Importing required packages and important utilities and routes
 * */

const Router = require("express");
const CommentController = require("../controllers/Comments");
const router = Router();

/**
 * Route for creating a Comment {POST}
 * @name /v1/topic/:id/comment
 * @param {string} path - Express path
 */
router.post("/topic/:topic/comment", CommentController.createOneComment);

/**
 * Route for displaying all Comments per Topic {GET}
 * @name /v1/topic/:id/comment
 * @param {string} path - Express path
 */
router.get("/topic/:topic/comment", CommentController.getAllComments);

/**
 * Route for deleting a single Comment {DELETE}
 * @name /v1/topic/:id/comment/:id
 * @param {string} path - Express path
 */
router.delete("/topic/:topic/comment/:id", CommentController.deleteOneComment);
