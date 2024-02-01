const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const Post = require("../../model/Post.js");

async function getAll(req, res){
    try {
        const posts = await Post.find();

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

module.exports = getAll;