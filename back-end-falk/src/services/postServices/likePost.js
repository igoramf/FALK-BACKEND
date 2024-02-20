const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const Post = require("../../model/Post.js");

async function likePost(req, res){
    try {
        
        const { postId } = req.params;
        const { userId, isLike } = req.body

        const post = await Post.findById(postId);

        if(!post.likes){
            const updatePost = await Post.findByIdAndUpdate(postId, { likes: [] }, {upsert: true, runValidators: true})
            await updatePost.save();
        }

        const userAlreadyLiked = post.likes.filter((item) => item == userId)

        if(userAlreadyLiked) return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Esse usuário já curtiu esse post!"
        })

        const updatedPost = await Post.findById(postId);

        isLike ? updatedPost.likes.push(userId) : updatedPost.likes.pop(userId);

        const result = await updatedPost.save();

        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            data: result
        })

    } catch (error) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Erro ao curtir comentário"
        })
    }
}

module.exports = likePost;