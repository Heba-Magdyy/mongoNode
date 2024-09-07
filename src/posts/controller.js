const Post = require('./model');


exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            data: posts,
        })
    }
    catch (e) {
        console.log(e);
    }
}



exports.getPostById = async (req, res, next) => {
    try {
        const id = req.params.id
        const post = await Post.findById(id);
        res.status(200).json({
             post
        })
    }
    catch (e) {
        next(e)
    }
}


exports.createPost = async (req, res) => {
    const { title, body, tags } = req.body;
    const newPost = await Post.create({
        title,
        body,
        tags,
    })
    res.status(201).json({
        message: "Post has been created.",
        data: newPost
    })
}


exports.deletePost = (req, res) => {
    const id = req.params.id
    Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post has been deleted" })
}


exports.updatePost = async (req, res) => {
    const { title, body, tags } = req.body;
    const id = req.params.id;
    const updatedPost =await Post.findByIdAndUpdate(id, { title, body, tags });
    res.status(200).json({ message: " Post has been updated", data: updatedPost })
}


