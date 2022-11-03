import mongoose from "mongoose"

//Schema for data in MongoDB database
const postSchema = mongoose.Schema( {
    title: String,
    message: String,
    creator: String,
    tags:  [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage