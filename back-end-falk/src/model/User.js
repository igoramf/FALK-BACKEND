const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        profile_pic: {
            type:String
        },
        token_list: {
            type: [String],
            required: false,
            default: [],
        }
    },
    {
        timestamps: true,
    }
)

module.exports = model("User", UserSchema);