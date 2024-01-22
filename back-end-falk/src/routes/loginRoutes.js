const loginController = require('../controller/loginController');
const Auth = require("../middlewares/auth")

const router = require('express').Router();

router.post('/login', loginController.login);

router.post('/register', loginController.register);

router.patch('/signOut', Auth, loginController.logout);


module.exports = router;