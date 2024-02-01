const Post = require("../../model/Post.js");

const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

async function createPost(req, res){
    try {
        const data = {
            imageUrl,
            createdBy,
            text
        } = req.body

        let post = await Post.create(data)

        return res.status(HTTP_CODE_CREATED).json({
            status: HTTP_CODE_CREATED,
            message: "Post criado com sucesso",
            data: post
        })
        
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: e
          });
    }

}

module.exports = createPost