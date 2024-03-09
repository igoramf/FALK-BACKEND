const router = require('express').Router();
const Auth  = require('../middlewares/auth');
const PostController = require("../controller/postController")

// GET ALL POST
router.get('/', PostController.getAll);

router.post("/create", Auth,  PostController.createPost);

router.put("/like/:postId", Auth, PostController.saveLikes);

router.get("/community/:communityName", Auth, PostController.getPostsByCommunity)

router.get("/user/:username", Auth, PostController.getPostsByUser)
module.exports = router;