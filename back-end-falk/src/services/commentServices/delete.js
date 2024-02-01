const Comment = require("../../model/Comment.js");
const Post = require("../../model/Post.js");

const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

async function deleteComment(req, res){
    try {
        const { commentId } = req.params

        const comm = await Comment.findByIdAndDelete({_id: commentId})

        return res.status(HTTP_CODE_CREATED).json({
            status: HTTP_CODE_OK,
            message: "Comentário deletado com sucesso",
            data: comm
        })
        
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: "Erro ao deletar o comentário"
          });
    }

}

module.exports = deleteComment