const router = require('express').Router();
const UserController = require('../controller/userController');
const Auth  = require('../middlewares/auth');

router.get('/:idUser',  Auth.private, UserController.getUser);

router.get('/', Auth.private, UserController.getAll);


module.exports = router;