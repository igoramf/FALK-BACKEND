const router = require('express').Router();
const UserController = require('../controller/userController');
const Auth  = require('../middlewares/auth');
const { upload }  = require("../middlewares/multer")

router.get('/:username',  Auth, UserController.getUser);

router.get('/', Auth , UserController.getAll);

router.post("/upload-profile-pic", upload, Auth, UserController.uploadProfilePic)


module.exports = router;