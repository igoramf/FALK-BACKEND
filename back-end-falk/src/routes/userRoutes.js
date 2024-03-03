const router = require('express').Router();
const UserController = require('../controller/userController');
const Auth  = require('../middlewares/auth');

router.get('/:idUser',  Auth, UserController.getUser);

router.get('/', Auth , UserController.getAll);

router.post("/", UserController.uploadProfilePic)


module.exports = router;