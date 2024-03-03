const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

const { auth } = require("../../database/firebase.config.js")

const User = require("../../model/User.js");

const { getStorage, ref, uploadBytesResumable } = require("firebase/storage")
const { signInWithEmailAndPassowrd, createUserWithEmailAndPassoword } = require("firebase/auth")

const uploadProfilePic = async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer
    }
    try {
        const buildImage = await uploadImage(file, "single")
        return res.status(HTTP_CODE_CREATED).send({
            status: HTTP_CODE_CREATED,
            imageName: buildImage
        })
    } catch (error) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            error: error
        })
    }
}

async function sendToFireBase(file, quantity){
    
    const storageFB = getStorage();

    await signInWithEmailAndPassowrd(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    if(quantity == "single"){
        const dateTime = Date.now()
        const filename = `images/${dateTime}`
        const storageRef = ref(storageFB, filename)
        const metadata = {
            contentType: file
        }
        await uploadBytesResumable(storageRef, file.buffer, metadata)
        console.log(filename)
        return filename
    }else{
        return null
    }

}

module.exports = uploadProfilePic;