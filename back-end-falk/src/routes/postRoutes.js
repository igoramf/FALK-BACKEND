const router = require('express').Router();
const Auth  = require('../middlewares/auth');
const PostController = require("../controller/postController")

// GET ALL POST
router.get('/', PostController.getAll);

router.post("/create", Auth,  PostController.createPost);

module.exports = router;