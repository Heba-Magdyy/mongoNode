const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: ["true", "Please add the title"],
        },

        body: {
            type: String,
            required: ["true", "Please add the body"]
        },
        tags: {
            type: Array,
            default:[]
        },
        }, 
         {timestamps: true}
);


const Post = mongoose.model("Post",postSchema);
module.exports = Post;