const Community = require("../../model/Community.js");
const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");
const normalizeUsername = require("../../utils/normalizeUsername.js");


async function getOne(req, res){
    try {

        const { communityName } = req.params
        communityName = normalizeUsername(communityName)
        const comm = await Community.findOne({communityName: communityName}).populate("users")

        if(!comm) return res.status.send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Comunidade não encontrada!"
        })

        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            data: comm
        })

    } catch (error) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: error.message 
        })
    }
}

module.exports = getOne;