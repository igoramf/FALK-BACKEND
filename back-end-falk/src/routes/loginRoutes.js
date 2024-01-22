const loginController = require('../controller/loginController');

const router = require('express').Router();

router.post('/login', loginController.login);

router.post('/register', loginController.register);


module.exports = router;