const create = require("../services/communityServices/create")
const getAll = require("../services/communityServices/getAll")
const getOne = require("../services/communityServices/getOne")
const upload = require("../services/communityServices/uploadProfilePic")

module.exports = {
    async createCommunity(req,res){
        return create(req, res)
    },

    async getAllCommunity(req,res){
        return getAll(req, res)
    },
    async getOneCommunity(req,res){
        return getOne(req, res)
    },
    async uploadProfilePic(req, res){
        return upload(req,res)
    }

}