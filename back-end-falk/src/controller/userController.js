const getAllService = require("../services/UserServices/getAll");
const getUserService = require("../services/UserServices/getUser")
const uploadPorfilePicService = require("../services/UserServices/uploadProfilePicService")

module.exports = {
    // GET METHODS

    async getUser(req, res) {
        return getUserService(req, res);
    },
    async getAll(req, res){
        return getAllService(req, res);
    },
    async uploadProfilePic(req, res){
        return uploadPorfilePicService(req,res);
    }
}