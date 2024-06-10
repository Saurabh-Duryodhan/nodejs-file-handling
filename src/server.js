dotenv.config()
import express from 'express'
import dotenv from 'dotenv'
import { join, resolve } from 'path';
import { upload } from './utils/file-handler.js';

const __dirname = resolve()

const { PORT } = process.env
const server = express()


server.use(express.static(join(__dirname, "public/uploads")))

server.get('/templates/:filepath', (req, res) => { 
    const {filepath} = req.params
    res.json({image: `${req.protocol}://${req.hostname}:${PORT}/${filepath}`})
 })
server.post('/post-image', upload.single('avatar'), (req, res) => {
    console.log(req.file, "REQUEST_FILE")
    res.send("File-Uploading")
})

server.listen(PORT, () => console.log(`Server started at port number: http://localhost:${PORT}`))
