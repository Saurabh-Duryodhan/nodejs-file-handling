dotenv.config()
import express from 'express'
import dotenv from 'dotenv'
import { join, resolve } from 'path';

const __dirname = resolve()

const { PORT } = process.env
const server = express()
console.log('fo-')
server.use(express.static(join(__dirname, "public/uploads")))

server.get('/templates', (req, res) => res.sendFile(join(__dirname, "public/uploads", 'wallpaper.jpg')))
server.listen(PORT, () => console.log(`Server started at port number: http://localhost:${PORT}`))
