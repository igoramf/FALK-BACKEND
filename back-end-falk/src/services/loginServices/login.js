const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR
  } = require("../../utils/httpStatus.js");

const User = require("../../model/User.js");

async function login(req, res){
    let { email, password } = req.body

    try{
        let user =  await Usuario.findOne({ email })
        

        if(!user){
            return res.status(HTTP_CODE_BAD_REQUEST).send({
                status: HTTP_CODE_BAD_REQUEST,
                message: "Email ou senha inválidos"
            })
        }
    
        return res.status(HTTP_CODE_OK).send({
            status: HTTP_CODE_OK,
            data: user
        })
    }catch (e) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe os dados corretamente para fazer o login."
        })
    }

}

module.exports = login;