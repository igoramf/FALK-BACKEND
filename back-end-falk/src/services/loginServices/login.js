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

        let token = signToken(user);
        pushToken(user, token);
    
        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            auth: true,
            data: {
                id: user._id,
                user: user.email,
                token:  `Bearer ` + token,
                name: user.name,
                phone: user.telefone
            }
        })
    }catch (e) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe os dados corretamente para fazer o login."
        })
    }

}

function signToken (user) {
    return token = JWT.sign(
        { 
            idUser: user._id, 
            email: user.email
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '3h'}
    )
}

async function pushToken(user, token) {
    let new_token_list = user.token_list;
    new_token_list.push(token);
    user = await User.findByIdAndUpdate(user._id, {
      token_list: new_token_list,
    });
}

module.exports = login;