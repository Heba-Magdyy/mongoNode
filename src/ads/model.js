const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: ["true", "Please add the title"],
        },

        img: {
            type: String,
            required: ["true", "Please add the img"]
        },
        user_id :{
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
        }, 
         {timestamps: true}
);


const Ads = mongoose.model("Ads",adsSchema);
module.exports = {Ads};