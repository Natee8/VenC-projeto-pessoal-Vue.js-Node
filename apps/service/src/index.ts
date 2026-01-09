import express from 'express'
import bodyParser from 'body-parser'
import authRoutes from './presentation/controllers/auth.routes'

const app = express()
const PORT = process.env.APP_PORT || 3000

app.use(bodyParser.json())
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`)
})