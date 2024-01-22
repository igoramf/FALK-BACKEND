const router = require('express').Router();
const UserController = require('../controller/userController');

router.get('/:idUser', UserController.getUser);

router.post('/', UserController.createUser);

module.exports = router;