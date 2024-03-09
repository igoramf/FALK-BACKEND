const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const User = require("../../model/User.js");
const normalizeUsername = require("../../utils/normalizeUsername.js");

async function getUser(req, res){
    let username = req.params.username

    username = normalizeUsername(username)

    try {
        let user = await User.findOne({username})
    
        if(!user) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "usúario não encontrado."});
    
        return res.status(HTTP_CODE_OK).send({data: user})
    } catch (error) {
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).send({
            message: error.message
          });
    }

}

module.exports = getUser;