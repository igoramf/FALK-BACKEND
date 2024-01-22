const User = require("../../model/User");
const { HTTP_CODE_OK, HTTP_CODE_BAD_REQUEST } = require("../../utils/httpStatus");

async function logout(req, res) {
  let id = req.query.idUser;
  let [,token] = req.headers.authorization.split(' ');

  let user = await User.findById(id);
  if(!user) return res.status(HTTP_CODE_BAD_REQUEST).send({
    message: "Id inválido",
    status: HTTP_CODE_BAD_REQUEST
  })


  new_token_list = user.token_list?.remove(token);

  user = await User.findByIdAndUpdate(id, {
    token_list: new_token_list,
  });

  return res.status(HTTP_CODE_OK).json({
    status: HTTP_CODE_OK, 
    message: "User has logout." 
});
}

module.exports = logout;