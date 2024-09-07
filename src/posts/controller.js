const Post = require('./model');


exports.getAllPosts = async (req, res) => {
    try {
        // const posts = await Post.find().populate("user_id");
        const posts = await Post.find().populate({ path: "user_id", select: "name" });

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
        user_id: req.user_id
    })
    res.status(201).json({
        message: "Post has been created.",
        data: newPost
    })
}


exports.deletePost =async (req, res,next) => {
    const id = req.params.id
    try {
        const post =await Post.findById(id);
        if (req.user_id !== post.user_id) res.status(401).json({ message: "can't do this action" })

        Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post has been deleted" })
    } catch (e) {
        next(e);
    }
}

// هياخد array عشان ستأكد من حاجتين 
//عامل لوج ان ولا لا و هو صاحب البوست ولا لا


exports.updatePost = async (req, res) => {
    const { title, body, tags } = req.body;
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(id, { title, body, tags });
    res.status(200).json({ message: " Post has been updated", data: updatedPost })
}


