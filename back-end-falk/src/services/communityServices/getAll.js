const Community = require("../../model/Community.js");
const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");


async function getAll(req, res){
    try {
        const communities = await Community.find().sort({createdAt:-1});

        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            data: communities
        })

    } catch (error) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: error.message 
        })
    }
}

module.exports = getAll;