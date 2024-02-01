const getAllPost = require("../services/postServices/getAll")


module.exports = {
    // GET METHODS
    async getAll(req, res) {
        return getAllPost(req, res);
    },

}