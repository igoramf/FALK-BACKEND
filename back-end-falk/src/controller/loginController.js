const loginService = require("../services/loginServices/login")
const registerService = require("../services/loginServices/register")

module.exports = {

    async login(req, res){
        return loginService(req, res);
    },
    async register(req, res){
        return registerService(req, res);
    }

}