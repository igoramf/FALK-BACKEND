const Post = require("../../model/Post.js");

const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
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
        console.log(error)
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: "Erro ao criar o post"
          });
    }

}

module.exports = createPost