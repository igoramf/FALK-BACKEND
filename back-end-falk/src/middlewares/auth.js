const { HTTP_CODE_UNAUTHORIZED } = require("../utils/httpStatus");

const Auth ={
    private: async (req, res, next) => {
        let sucess = false;

        if(sucess){
            next()
        }else{
            res.status(HTTP_CODE_UNAUTHORIZED).send({
                status: HTTP_CODE_UNAUTHORIZED,
                message: "Não autorizado."
            })
        }
    }
}

module.exports = Auth;