const loginService = require("../services/loginServices/login");
const logoutService = require("../services/loginServices/logout");
const registerService = require("../services/loginServices/register")

module.exports = {

    async login(req, res){
        return loginService(req, res);
    },
    async register(req, res){
        return registerService(req, res);
    },
    async logout(req, res){
        return logoutService(req, res);
    }

}