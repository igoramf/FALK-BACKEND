const multer = require("multer")
const path = require("path")
const fs = require("fs")

const uploadMultiple = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 1000000},
    fileFilter: function (req, file, cb){
        checkFileType(file, cb);
    }
}).array("image", 12);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 1000000},
    fileFilter: function (req, file, cb){
        checkFileType(file, cb);
    }
}).single("image")

function checkFileType(file, cb){
    
    const fileTypes = /jpeg|jpg|png|git/

    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    const mimeType = fileTypes.test(file.mimeType)

    if(mimeType && extName){
        return cb(null, true)
    }else{
        cb("Error: Images Only")
    }


}