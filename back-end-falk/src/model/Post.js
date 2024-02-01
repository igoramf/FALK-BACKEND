const { Schema, model } = require("mongoose")

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Post', postSchema);