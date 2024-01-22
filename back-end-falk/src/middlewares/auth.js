const { HTTP_CODE_UNAUTHORIZED } = require("../utils/httpStatus");
const JWT = require('jsonwebtoken')
const dotenv = require("dotenv").config()


const Auth ={
    private: async (req, res, next) => {
        const authHeader = req.headers.authorization 
        let sucess = false;

        if(authHeader){
            const [authType, token] = authHeader.split(' ');
            if(authType === 'Bearer'){
                try{
                    const decoded = JWT.verify(
                        token, 
                        process.env.JWT_SECRET_KEY
                    );
                    sucess = true
                }catch (err){
                    return res.status(401).send({ error: 'Token inválido' });
                }
            }
        }


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

module.exports = Auth.private;