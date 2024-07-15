import express from 'express'
import AsyncHandler from '../utils/AsyncHandler.js'
import ErrorHandler from '../utils/ErrorHandler.js'

const userRouter = express.Router()

userRouter.get('/',AsyncHandler(async(req,res,next)=>{
    //res.send("hello")
    next(new ErrorHandler(404,"test"))
}))

export default userRouter