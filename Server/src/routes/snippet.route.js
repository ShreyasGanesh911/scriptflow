import express from 'express'
import checkUser from '../middlewares/user.auth.js'
import { deleteProject,addProject,getAllProjects,updateProject,userprojects,singleProject } from '../controllers/Compiler.js'
const snippetRouter = express.Router()

snippetRouter.post('/add',checkUser,addProject)
snippetRouter.post('/remove',checkUser,deleteProject)
snippetRouter.put("/update",checkUser,updateProject)
snippetRouter.get("/userprojects",checkUser,userprojects)
snippetRouter.get("/allprojects",getAllProjects)
snippetRouter.get("/singleproject",checkUser,singleProject)


export default snippetRouter