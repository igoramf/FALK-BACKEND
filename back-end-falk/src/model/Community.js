const { Schema, model } = require("mongoose")

const communitySchema = new Schema({
    communityName: {
        type: String,
        required: true
    },
    users: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profile_pic: {
        type:String
    }
    },
    {
        timestamps: true,
    }
)

module.exports = model('Community', communitySchema);