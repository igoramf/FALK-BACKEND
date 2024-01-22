const {
    HTTP_CODE_OK,
    HTTP_CODE_BAD_REQUEST
  } = require("../../utils/httpStatus.js");
const User = require("../../model/User.js");
const JWT = require("jsonwebtoken")
require('dotenv').config()

async function login(req, res){
    let { email, password } = req.body

    try{
        let user =  await User.findOne({ email, password });
        
        if(!user){
            return res.status(HTTP_CODE_BAD_REQUEST).send({
                status: HTTP_CODE_BAD_REQUEST,
                message: "Email ou senha inválidos"
            })
        }

        const token = JWT.sign(
            { 
                id: user._id, 
                email: user.email
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3h'}
        )
    
        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            auth: true,
            data: {
                user: user.email,
                token:  `Bearer ` + token
            }
        })
    }catch (e) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe os dados corretamente para fazer o login."
        })
    }

}

module.exports = login;