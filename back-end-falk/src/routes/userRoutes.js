const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/:idUser', UserController.getUser);

router.get('/', UserController.getAll);


module.exports = router;