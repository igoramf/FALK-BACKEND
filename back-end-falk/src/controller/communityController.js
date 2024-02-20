const create = require("../services/communityServices/create")
const getAll = require("../services/communityServices/getAll")

module.exports = {
    async createCommunity(req,res){
        return create(req, res)
    },

    async getAllCommunity(req,res){
        return getAll(req, res)
    }

}