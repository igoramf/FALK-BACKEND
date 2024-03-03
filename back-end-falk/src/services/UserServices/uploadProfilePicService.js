const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

const { auth } = require("../../database/firebase.config.js")

const User = require("../../model/User.js");

const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage")
const { signInWithEmailAndPassword, createUserWithEmailAndPassoword } = require("firebase/auth")

const uploadProfilePic = async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer,
        file: req.file
    }
    console.log(req.file)
    const buildImage = await sendToFireBase(file, "single")
    try {
        return res.status(HTTP_CODE_CREATED).send({
            status: HTTP_CODE_CREATED,
            imageName: buildImage,
            fileName: req.file.originalname,
            message: "Uploaded file to Storage"
        })
    } catch (e) {
        return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            error: e
        })
    }
}

async function sendToFireBase(file, quantity){
    
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    
    if(quantity == "single"){
        const dateTime = Date.now()
        const filename = `images/${dateTime}`
        const storageRef = ref(storageFB, filename)
        const metadata = {
            contentType: file.type
        }
        const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata)

        const downloadURL = await getDownloadURL(snapshot.ref)

        return downloadURL
    }else{
        return null
    }

}

module.exports = uploadProfilePic;