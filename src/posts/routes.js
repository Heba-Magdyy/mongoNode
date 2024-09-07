const express = require("express")
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require ("./controller");


router.get("/", getAllPosts);
router.get("/:id",getPostById);
router.post("/", createPost);
router.patch("/:id",updatePost);
router.delete("/:id", deletePost)


module.exports = router;