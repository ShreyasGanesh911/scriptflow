import express from 'express'
import AsyncHandler from '../utils/AsyncHandler.js'
import ErrorHandler from '../utils/ErrorHandler.js'
import { db } from '../db/index.js'
import {collection,addDoc,updateDoc,deleteDoc,getDocs} from 'firebase/firestore';
const userRouter = express.Router()

userRouter.post('/create',AsyncHandler(async(req,res,next)=>{
    const {name,phone,email} = req.body
    const data = {name,email,phone}
    //const response = await db.collection('users').add(data)
     const response = await addDoc(collection(db, 'users'), data);
    res.status(200).json({success:true,result:response})
}))

userRouter.get("/userdetails",AsyncHandler(async(req,res,next)=>{
    const {email} = req.params
    const response = await getDocs(collection(db,'users'))
    res.status(200).json({success:true,result:response.docs})

}))

export default userRouter