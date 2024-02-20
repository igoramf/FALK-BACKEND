const getAllPost = require("../services/postServices/getAll")
const createPost = require("../services/postServices/createPost");
const likePost = require("../services/postServices/likePost")


module.exports = {
    // GET METHODS
    async getAll(req, res) {
        return getAllPost(req, res);
    },
    async createPost(req, res){
        return createPost(req, res);
    },
    async saveLikes(req, res){
        return likePost(req, res);
    }

}