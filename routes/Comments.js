/**
 * Importing required packages and important utilities and routes
 * */

const Router = require("express");
const CommentController = require("../controllers/Comments");
const router = Router();

/**
 * Route for creating a Comment {POST}
 * @name /v1/comment
 * @param {string} path - Express path
 */
router.post("/", CommentController.createOneComment);

/**
 * Route displaying all Comments {GET}
 * @name /v1/comment
 * @param {string} path - Express path
 */
router.get("/", CommentController.getAllComments);

/**
 * Route for deleting a single Comment {DELETE}
 * @name /v1/comment/:id
 * @param {string} path - Express path
 */
router.delete("/:id", CommentController.deleteOneComment);

module.exports = router;
