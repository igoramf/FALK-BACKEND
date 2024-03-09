const User = require("../../model/User");
const { HTTP_CODE_CREATED, HTTP_CODE_BAD_REQUEST, HTTP_CODE_INTERNAL_SERVER_ERROR } = require("../../utils/httpStatus");
const JWT = require("jsonwebtoken")
const normalizeUsername = require("../../utils/normalizeUsername")

async function register(req, res) {
    let {
        name,
        email,
        password,
        username,
        telefone
    } = req.body;

    let sameEmail = await User.findOne({email})
    if(sameEmail) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "Email já cadastrado."})


    usernameNormalized = normalizeUsername(username)
    let sameUsername = await User.findOne({username: usernameNormalized});
    if(sameUsername) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "Username já cadastrado."});


    try{
        
        let user = await User.create({
            name,
            email,
            password,
            username,
            telefone
        });
        
        const token = JWT.sign(
            { 
                id: user._id, 
                email: user.email
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3h'}
        )

        return res.status(HTTP_CODE_CREATED).json({
            status: HTTP_CODE_CREATED,
            message: "Usuário cadastrado com sucesso",
            auth: true,
            data: {
                user: user,
                token:  `Bearer ` + token
            }
        })
    }catch (e){
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: e
          });
    }
}

module.exports = register;