import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    username: {
        type: Number,
        required: true,
        unique: true,
    },
    name : {
        type :String,
        required: true,
    },
    video : {
        type : String,
        required : true
    }
})

export const Video = mongoose.model('Video', videoSchema)