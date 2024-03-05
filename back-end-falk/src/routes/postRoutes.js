const router = require('express').Router();
const Auth  = require('../middlewares/auth');
const PostController = require("../controller/postController")

// GET ALL POST
router.get('/', PostController.getAll);

router.post("/create", Auth,  PostController.createPost);

router.put("/like/:postId", Auth, PostController.saveLikes);

router.get("/community/:id", Auth, PostController.getPostsByCommunity)

router.get("/user/:id", Auth, PostController.getPostsByUser)
module.exports = router;