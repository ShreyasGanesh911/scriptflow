import user from "../models/user.model.js"
import ErrorHandler from "../utils/ErrorHandler.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const checkUser = async(req,res,next)=>{
    const {Auth} = req.cookies
    if(!Auth)
        return next(new ErrorHandler(401,"Need to login"))
    jwt.verify(Auth,process.env.JWT_KEY,async(err,cred)=>{
        if(err){
            res.clearCookie('Auth')
            return next(new ErrorHandler(401,"Invalid token"))
        }
        const checkUser = await user.findOne({email:cred.email})
        if(!checkUser){
            res.clearCookie('Auth')
            return next(new ErrorHandler(401,"Invalid token, need to login again"))
        }
        req.user = cred
        next()
    })

} 

export default checkUser