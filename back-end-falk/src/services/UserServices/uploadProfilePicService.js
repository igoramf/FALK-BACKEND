const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const User = require("../../model/User.js");

async function uploadProfilePic(req, res){
    let userId = req.params.idUser

    try {
        let user = await User.findById(userId)
    
        if(!user) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "Id não encontrado."});
    
        return res.status(HTTP_CODE_OK).send({data: user})
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).send({
            message: error.message
          });
    }

}

module.exports = uploadProfilePic;