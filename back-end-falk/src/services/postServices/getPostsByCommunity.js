const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const Post = require("../../model/Post.js");
const Community = require("../../model/Community.js");
const normalizeUsername = require("../../utils/normalizeUsername.js");

async function getPostsByCommunity(req, res){
    try {
        let { communityName } = req.params

        const comm = await Community.findOne({communityName})

        const posts = await Post.find({community: comm._id})
        .populate("createdBy")
        .populate("likes")
        .populate({
            path: "comments",
            populate: {
                path: "createdBy",
                model: "User"
            }
        })
        .sort({createdAt:-1});

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

module.exports = getPostsByCommunity;