const getAllPost = require("../services/postServices/getAll")
const createPost = require("../services/postServices/createPost")


module.exports = {
    // GET METHODS
    async getAll(req, res) {
        return getAllPost(req, res);
    },
    async createPost(req, res){
        return createPost(req, res);
    }

}