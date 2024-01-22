const getUserService = require("../services/UserServices/getUser")
const createUserService = require("../services/UserServices/createUser")

module.exports = {
    // GET METHODS

    async getUser(req, res) {
        return getUserService(req, res);
    },
    async createUser(req, res){
        return createUserService(req, res);
    }
}