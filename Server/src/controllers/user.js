import user from "../models/user.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const success = true


// end point to login
export const loginUser = AsyncHandler(async(req,res,next)=>{
    const {email,password} = req.body
    const result = await user.findOne({email})
    if(!result)
        return next(new ErrorHandler(404,"User doesn't exist"))
    const compare = bcrypt.compareSync(password,result.password)
    if(compare){
        const token = jwt.sign({email,id:result._id},process.env.JWT_KEY)
        res.status(200).cookie("Auth",token).json({success,message:"Logged in"})
    }
        
    else
        next(new ErrorHandler(401,"Incorrect password"))
})


// end point to signup
export const createUser = AsyncHandler(async(req,res,next)=>{
    const {email,password,name} = req.body
    const check = await user.findOne({email})
    if(check)
        return next(new ErrorHandler(409,"Email already used"))

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const result =  await user.create({name,email,password:hash})
    const token = jwt.sign({email,id:result._id},process.env.JWT_KEY)
    res.status(201).cookie("Auth",token).json({success,message:"User created!"})
})