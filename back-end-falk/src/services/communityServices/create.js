

const Community = require("../../model/Community.js");
const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

async function createCommunity(req, res){
    try {
        const data = {
            communityName,
            createdBy,
            description
        } = req.body

        const alreadyExits = await Community.find({communityName})

        if(alreadyExits.length != 0) return res.status(400).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Já existe comunidade com esse nome."
        })

        const com = await Community.create(data)

        return res.status(HTTP_CODE_CREATED).send({
            status: HTTP_CODE_CREATED,
            message: "Comunidade criada com sucesso.",
            data: com
        })
        
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: "Erro ao criar o comentário"
          });
    }

}

module.exports = createCommunity