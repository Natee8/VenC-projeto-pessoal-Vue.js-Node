import express from 'express'
import bodyParser from 'body-parser'
import { router as auth } from './presentation-controllers/auth.controller.js'

const app = express()
const PORT = process.env.APP_PORT || 3000

app.use(bodyParser.json())
app.use('/auth', auth)

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})
