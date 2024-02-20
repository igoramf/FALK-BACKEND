const createComm = require("../services/commentServices/create")
const deleteComm = require("../services/commentServices/delete");

module.exports = {

    async createComment(req, res){
        return createComm(req, res);
    },
    async delete(req, res){
        return deleteComm(req, res);
    }
}