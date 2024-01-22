const User = require("../../model/User");
const { HTTP_CODE_CREATED, HTTP_CODE_BAD_REQUEST, HTTP_CODE_INTERNAL_SERVER_ERROR } = require("../../utils/httpStatus");

async function createUser(req, res) {
    let {
        name,
        email,
        password,
        username,
        telefone
    } = req.body;

    let sameEmail = await User.findOne({email})
    if(sameEmail) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "Email já cadastrado."})

    let sameUsername = await User.findOne({username});
    if(sameUsername) return res.status(HTTP_CODE_BAD_REQUEST).send({error: "Username já cadastrado."});


    try{
        let user = await User.create({
            name,
            email,
            password,
            username,
            telefone
        });

        return res.status(HTTP_CODE_CREATED).json({
            message: "Usuário cadastrado com sucesso",
            user: user
        })
    }catch (e){
        return res.status(HTTP_CODE_INTERNAL_SERVER_ERROR).json({
            message: e
          });
    }
}

module.exports = createUser;