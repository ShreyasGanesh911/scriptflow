import express from 'express'
import APIError from './utils/APIError.js'
import projectRouter from './routes/project.route.js'
import userRouter from './routes/user.route.js'
import cookie from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(cookie())
app.use(cors({credentials:true,origin:true}))
app.use('/user',userRouter)
app.use('/project',projectRouter)



app.use(APIError)

export default  app 



