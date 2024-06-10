import path, { join, resolve } from "path"
import multer from "multer"
const __dirname = resolve()
console.log(join(__dirname, 'public/uploads'))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, join(__dirname, 'public/uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

export const upload = multer({ storage: storage })