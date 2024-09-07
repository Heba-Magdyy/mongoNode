const express = require("express")
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require ("./controller");

const {chechAuth} = require('../users/middleware')


router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/",[chechAuth], createPost);
router.patch("/:id",updatePost);
router.delete("/:id",[chechAuth], deletePost)


module.exports = router;