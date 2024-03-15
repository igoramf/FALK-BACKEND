const { auth } = require("../../database/firebase.config.js")

const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage")
const { signInWithEmailAndPassword, createUserWithEmailAndPassoword } = require("firebase/auth")

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

module.exports = sendToFireBase;