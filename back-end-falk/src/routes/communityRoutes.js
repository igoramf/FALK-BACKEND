const comController = require("../controller/communityController")
const Auth = require("../middlewares/auth")

const router = require('express').Router();

router.post("/", Auth,  comController.createCommunity);

router.get("/", comController.getAllCommunity)

router.get("/:communityName", Auth, comController.getOneCommunity)


module.exports = router;