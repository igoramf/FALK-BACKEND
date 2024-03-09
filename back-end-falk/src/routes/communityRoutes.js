const comController = require("../controller/communityController")
const Auth = require("../middlewares/auth")
const { upload } = require("../middlewares/multer")

const router = require('express').Router();

router.post("/", Auth,  comController.createCommunity);

router.get("/", comController.getAllCommunity)

router.get("/:communityName", Auth, comController.getOneCommunity)


router.post("/upload-profile-pic", upload, Auth, comController.uploadProfilePic)


module.exports = router;