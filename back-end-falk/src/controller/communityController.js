const create = require("../services/communityServices/create")
const getAll = require("../services/communityServices/getAll")
const getOne = require("../services/communityServices/getOne")

module.exports = {
    async createCommunity(req,res){
        return create(req, res)
    },

    async getAllCommunity(req,res){
        return getAll(req, res)
    },
    async getOneCommunity(req,res){
        return getOne(req, res)
    }

}