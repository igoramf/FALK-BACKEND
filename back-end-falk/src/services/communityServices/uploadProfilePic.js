const {
    HTTP_CODE_OK,
    HTTP_CODE_UNAUTHORIZED,
    HTTP_CODE_BAD_REQUEST,
    HTTP_CODE_INTERNAL_SERVER_ERROR,
    HTTP_CODE_CREATED
  } = require("../../utils/httpStatus.js");

const { auth } = require("../../database/firebase.config.js")

const Community = require("../../model/Community.js");

const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage")
const { signInWithEmailAndPassword, createUserWithEmailAndPassoword } = require("firebase/auth")

const uploadProfilePic = async (req, res) => {
    try {
        const { communityId } = req.body

        const community = await Community.findById(communityId)
        if(!community) return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe o id da comunidade"
        })
        
        if(!req.file) return res.status(HTTP_CODE_BAD_REQUEST).send({
            status: HTTP_CODE_BAD_REQUEST,
            message: "Informe o arquivo a ser armazenado"
        })
        
        const file = {
            type: req.file.mimetype,
            buffer: req.file.buffer,
            file: req.file
        }
        const buildImage = await sendToFireBase(file, "single")

        community.profile_pic = buildImage
        await community.save()

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