import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import axios from 'axios'
import { Project, Snippet } from "../Types/project"
import { NavLink, useNavigate } from 'react-router-dom'
import CardDropDown from '../components/CardDropDown'
import SnippetCard from '../components/SnippetCard'
export default function Account() {
  const navigate = useNavigate()
  const [projects,setProjects] = useState<Project[]>()
  const [snippets,setSnippets] = useState<Snippet[]>()
  const [show,setShow] = useState(false)
  const getData = ()=>{
          axios.get("http://localhost:4000/project/userprojects",{withCredentials:true}).then((e)=>{
            setProjects(e.data.result.projects)
            setSnippets(e.data.result.snippets)
            console.log(e.data)}).catch((e)=>{
              if(e.response.status!==500)
                return navigate('/login')
              console.log(e)})
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <section className='page flex justify-center mt-16'>
        
        <div className='w-3/4 h-5/6 '>
        <div className='w-full '>
          <button className={` ${!show && "bg-indigo-400"} border-t border-l border-r mx-5 px-3 py-2 rounded`} onClick={()=>setShow(false)}>Snippets</button>
          <button className={` ${show && "bg-indigo-400"} border-t border-l border-r px-3 py-2 rounded`} onClick={()=>setShow(true)}>Playground</button>
        </div>
        <div className='h-10 w-11/12 border'> search bar</div>


        <div className='w-full grid lg:grid-cols-3 2xl:grid-cols-4'>
        { !show && projects?.map(e=><NavLink to={`/playground/${e._id}`}><ProjectCard id={e._id} css={e.css} html={e.html} js={e.js} title={e.projectName} key={e._id} admin={true}/></NavLink>)}
        </div>
        {show && <div className='border w-full grid lg:grid-cols-3 2xl:grid-cols-4'>
        {snippets?.map((e)=><SnippetCard _id={e._id} language={e.language} projectName={e.projectName} version={e.version} key={e._id}/>)}
        </div>}
        
        </div>
    </section>
  )
}
