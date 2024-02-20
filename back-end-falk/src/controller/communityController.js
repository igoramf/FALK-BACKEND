const create = require("../services/communityServices/create")

module.exports = {
    async createCommunity(req,res){
        return create(req, res)
    }
}