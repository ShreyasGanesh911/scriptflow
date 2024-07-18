import snippet from "../models/snippet.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
const success = true

export const addProject = AsyncHandler(async(req,res,next)=>{
        let {projectName,language,version,content,publicView,projectId} = req.body
        if(!projectId){
            publicView = publicView || false
            const {id} = req.user
            const result = await snippet.create({projectName,language,version,content,publicView,user:id})
            res.status(200).json({success,result})
        }
        else{
            const result = await snippet.findByIdAndUpdate({_id:projectId},{projectName,language,version,content,publicView})
            res.status(200).json({success,result})
        }


})

export const updateProject = AsyncHandler(async(req,res,next)=>{
    const {projectId,projectName,language,version,content,publicView} = req.body
    if(!projectId)
        return next(new ErrorHandler(400,"Project ID not provided"))
    const result = await snippet.findByIdAndUpdate({_id:projectId},{projectName,language,version,content,publicView})
    res.status(200).json({success,result})
})

export const getAllProjects = AsyncHandler(async(req,res,next)=>{
    const result = await snippet.find({publicView:true}).populate('user','-password -__v').select('-__v')
    res.status(200).json({success,result})
})

export const userprojects = AsyncHandler(async(req,res,next)=>{
    const {id} = req.user
    const result = await snippet.find({user:id})
    res.status(200).json({success,result})
})

export const deleteProject = AsyncHandler(async(req,res,next)=>{
    const {projectId} = req.body
    if(!projectId)
        return next(new ErrorHandler(400,"Project ID not provided"))
    const result = await snippet.deleteOne({_id:projectId})
    res.status(200).json({success,result})
})

export const singleProject = AsyncHandler(async(req,res,next)=>{
    const {projectId} = req.query
    const {id} = req.user
    if(!projectId)
        return next(new ErrorHandler(400,"Project ID not provided"))
    const result = await snippet.findOne({_id:projectId})
    if(result.user.toString() === id)
        return res.status(200).json({success,result})
    next(new ErrorHandler(401,"Cannot access this project"))
})