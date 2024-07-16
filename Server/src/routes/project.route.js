import express from 'express'
import { addProject,getAllProjects,updateProject,userprojects,deleteProject } from '../controllers/project.js'
import checkUser from '../middlewares/user.auth.js'
const projectRouter = express.Router()

projectRouter.post('/add',checkUser,addProject)
projectRouter.delete('/remove',checkUser,deleteProject)
projectRouter.put("/update",checkUser,updateProject)
projectRouter.get("/userprojects",checkUser,userprojects)
projectRouter.get("/allprojects",getAllProjects)

export default projectRouter