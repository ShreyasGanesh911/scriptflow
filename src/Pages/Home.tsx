import axios from "axios"
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { Project } from "../Types/project"
import { Link } from "react-router-dom"

export default function Home() {
  const [projects,setProjects] = useState<Project[]>()
  useEffect(()=>{
    axios.get("http://localhost:4000/project/allprojects", { withCredentials: true })
    .then(({data,status})=>{
      setProjects(data.result)
      console.log(data,status)})
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
     <section className="page flex flex-col items-center ">

        <h1 className="w-3/4 xl:text-3xl lg:text-2xl p-3 mt-2 font-mono">Popular Playgrounds</h1>
        <div className="w-3/4 grid 2xl:grid-cols-4 lg:grid-cols-3 mt-5">
        {projects?.map(e=><Link to={`/playground/${e._id}`}><ProjectCard id={e._id} css={e.css} html={e.html} js={e.js} title={e.projectName} key={e._id} admin={false}/></Link>)}
        </div>
     </section>
    </>
  )
}