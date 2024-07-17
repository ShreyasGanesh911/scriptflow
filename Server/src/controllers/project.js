import project from "../models/project.models.js";
import snippet from "../models/snippet.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
const success = true

export const addProject = AsyncHandler(async(req,res,next)=>{
        const {projectName,html,css,js,publicView,projectId} = req.body
        const {id} = req.user
        if(!projectId){
            const result = await project.create({projectName,html,css,js,publicView,user:id})
        res.status(200).json({success,result})
        }
        else{
            const result = await project.findByIdAndUpdate({_id:projectId},{projectName,html,css,js,publicView,user:id})
        res.status(200).json({success,result})
        }
        
})

export const updateProject = AsyncHandler(async(req,res,next)=>{
    const {projectId,projectName,html,css,js,publicView} = req.body
    if(!projectId)
        return next(new ErrorHandler(400,"Project ID not provided"))
    const result = await project.findByIdAndUpdate({_id:projectId},{projectName,html,css,js,publicView})
    res.status(200).json({success,result})
})

export const getAllProjects = AsyncHandler(async(req,res,next)=>{
    const result = await project.find({publicView:true}).populate('user','-password -__v').select('-__v')
    res.status(200).json({success,result})
})

export const userprojects = AsyncHandler(async(req,res,next)=>{
    const {id} = req.user
    const projects = await project.find({user:id})
    const snippets = await snippet.find({user:id})
    res.status(200).json({success,result:{projects,snippets}})
})

export const getSingleProject = AsyncHandler(async(req,res,next)=>{
    const {projectId} = req.query
    
    if(!projectId)
        return next(new ErrorHandler(400,"Project Id not mentioned"))
    const result = await project.findOne({_id:projectId})
    if(!result)
        return next(new ErrorHandler(404,"Project not found"))
    
        return res.status(200).json({success,result})
})
export const deleteProject = AsyncHandler(async(req,res,next)=>{
    const {projectId} = req.body
    if(!projectId)
        return next(new ErrorHandler(400,"Project ID not provided"))
    const result = await project.deleteOne({_id:projectId})
    res.status(200).json({success,result})
})

export const checkIfOwner = AsyncHandler(async(req,res,next)=>{
    const {projectId} = req.query
    const {id} = req.user
    if(!projectId)
        return next(new ErrorHandler(400,"Project Id not mentioned"))
    const result = await project.findOne({_id:projectId})
   
    if(!result)
        return next(new ErrorHandler(404,"Project not found"))
    if(result.user.toString() === id)
        return res.status(200).json({success})
})