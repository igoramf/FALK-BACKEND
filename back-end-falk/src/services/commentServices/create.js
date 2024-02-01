const Comment = require("../../model/Comment.js");
const Post = require("../../model/Post.js");

const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

async function createComment(req, res){
    try {
        const data = {
            postId,
            createdBy,
            text
        } = req.body

        const post = await Post.findById(data.postId);
        let comment = await Comment.create(data);

        post?.comments.push(comment._id);

        await post.save();

        return res.status(HTTP_CODE_CREATED).json({
            status: HTTP_CODE_CREATED,
            message: "Comentário criado com sucesso",
            data: comment
        })
        
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: "Erro ao criar o comentário"
          });
    }

}

module.exports = createComment