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
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    },
    {
        timestamps: true,
    }
)

module.exports = model('Post', postSchema);