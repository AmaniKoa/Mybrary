import express from "express"
import router from "./routes/index.js"
import path from 'path'
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
import expressLayouts from "express-ejs-layouts"
app.set('view engins','ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',router)
app.listen(process.env.port || 3000)