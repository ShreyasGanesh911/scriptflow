import express from 'express'
import APIError from './utils/APIError.js'
import userRouter from './routes/user.route.js'
import 'dotenv/config'
const app = express()
app.use(express.json())
app.use(userRouter)


app.use(APIError)

export default  app 



