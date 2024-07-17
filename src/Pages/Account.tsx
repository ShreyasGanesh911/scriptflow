import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import axios from 'axios'
import { Project, Snippet } from "../Types/project"
import { useNavigate } from 'react-router-dom'
import CardDropDown from '../components/CardDropDown'
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
        { !show && projects?.map(e=><ProjectCard css={e.css} html={e.html} js={e.js} title={e.projectName} key={e._id} admin={true}/>)}
        {show && snippets?.map((e)=><div className='border w-96 h-32 rounded'>
              <p className='w-full  h-1/2 text-2xl flex items-center pl-2 truncate'>{e.projectName}</p>   
              <div className='h-1/2  w-full  flex'>
                <div className='w-3/4 h-full capitalize'>
                  <p className='h-1/2 px-2'><span className='text-sm'>Language:</span> {e.language}</p>
                  <p className='h-1/2 px-2'><span className='text-sm'>Version:</span> {e.version}</p>
                </div>
                <div className='w-1/4  h-full displayFlex'><CardDropDown/></div>
              </div>     
        </div>)}
        </div>
        </div>
    </section>
  )
}
