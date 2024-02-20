const comController = require("../controller/communityController")
const Auth = require("../middlewares/auth")

const router = require('express').Router();

router.post("/", Auth,  comController.createCommunity);

router.get("/", comController.getAllCommunity)

module.exports = router;