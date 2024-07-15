import express from 'express'
import APIError from './utils/APIError.js'
import userRouter from './routes/user.route.js'

const app = express()

app.use(userRouter)

app.use(APIError)
export default  app 




