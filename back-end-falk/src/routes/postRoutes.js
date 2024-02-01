const router = require('express').Router();
const Auth  = require('../middlewares/auth');
const PostController = require("../controller/postController")

// GET ALL POST
router.get('/', Auth,  PostController.getAll);

router.post("/create",  PostController.createPost);

module.exports = router;