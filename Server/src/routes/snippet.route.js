import express from 'express'
import checkUser from '../middlewares/user.auth.js'
import { deleteProject,addProject,getAllProjects,updateProject,userprojects } from '../controllers/Compiler.js'
const snippetRouter = express.Router()

snippetRouter.post('/add',checkUser,addProject)
snippetRouter.post('/remove',checkUser,deleteProject)
snippetRouter.put("/update",checkUser,updateProject)
snippetRouter.get("/userprojects",checkUser,userprojects)
snippetRouter.get("/allprojects",getAllProjects)


export default snippetRouter