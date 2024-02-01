const commentController = require('../controller/commentController');
const Auth = require("../middlewares/auth")

const router = require('express').Router();


router.post("/", Auth, commentController.createComment)