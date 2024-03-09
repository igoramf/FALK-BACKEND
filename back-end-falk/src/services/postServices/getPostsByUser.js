const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const Post = require("../../model/Post.js");
const User = require("../../model/User.js");
const normalizeUsername = require("../../utils/normalizeUsername.js");

async function getPostsByUser(req, res){
    try {
        let { username } = req.params

        username = normalizeUsername(username)

        const user = await User.findOne({username})

        const posts = await Post.find({createdBy: user._id})
        .populate("createdBy")
        .populate("likes")
        .populate("community")
        .populate({
            path: "comments",
            populate: {
                path: "createdBy",
                model: "User"
            }
        })
        .sort({createdAt:-1});
        console.log(user._id)

        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            data: posts
        })

    } catch (error) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: error.message 
        })
    }
}

module.exports = getPostsByUser;