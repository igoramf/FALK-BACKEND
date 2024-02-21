const { Schema, model, Types } = require("mongoose")

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    community: {
        type: Schema.Types.ObjectId,
        ref: "Community"
    }
    },
    {
        timestamps: true,
    }
)

module.exports = model('Post', postSchema);