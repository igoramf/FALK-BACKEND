const getAllService = require("../services/UserServices/getAll");
const getUserService = require("../services/UserServices/getUser")

module.exports = {
    // GET METHODS

    async getUser(req, res) {
        return getUserService(req, res);
    },
    async getAll(req, res){
        return getAllService(req, res);
    }
}