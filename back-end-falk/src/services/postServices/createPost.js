const Post = require("../../model/Post.js");
const sendToFireBase = require("../firebase.js")
const User = require("../../model/User.js")

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
            createdBy,
            text,
            community
        } = req.body

        const file = {
            type: req.file.mimetype,
            buffer: req.file.buffer,
            file: req.file
        }
        
        const user = await User.findById(createdBy)
        if(!user) return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe o id do usúario"
        })
        
        if(!req.file) return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe o arquivo a ser armazenado"
        })

        
        const buildImage = await sendToFireBase(file, "single")
        
        data.imageUrl = buildImage

        let post = await Post.create(data)
        
        return res.status(HTTP_CODE_CREATED).json({
            status: HTTP_CODE_CREATED,
            message: "Post criado com sucesso",
            data: post
        })
        
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: "Erro ao criar o post"
          });
    }

}

module.exports = createPost