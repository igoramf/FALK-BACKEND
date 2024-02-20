const comController = require("../controller/communityController")
const Auth = require("../middlewares/auth")

const router = require('express').Router();

router.post("/", comController.createCommunity);

module.exports = router;