const createComm = require("../services/commentServices/create")

module.exports = {

    async createComment(req, res){
        return createComm(req, res);
    }

}