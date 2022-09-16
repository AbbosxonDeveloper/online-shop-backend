import express from 'express'
import { read, write } from './utils/model.js'
import router from './routers/router.js'
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(router)


app.listen(PORT, () => console.log('ready http://localhost:4000'))