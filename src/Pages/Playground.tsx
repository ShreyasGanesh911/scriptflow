import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'
import OutputConsole from '../components/OutputConsole'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

export default function PlayGround() {
    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    const [srcDoc,setSrcDoc] = useState<string>('')
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setSrcDoc(`
          <html>
          <body>${html}</body>  
          <style>${css}</style>
           <script>${js}</script>
          </html>
      `)
      return ()=>clearTimeout(timer)
      },500)
    },[html,css,js])
    
    const handleSave = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      const data = {
        projectName:"Test1234", html,css,js,publicView:true
      }
      axios.post("http://localhost:4000/project/add",data,{withCredentials:true}).then((data)=>{
          console.log(data)
      }).catch((e)=>{
        console.log((e))
      })
    }
  return (
    <>
        <section className='page flex' >
          
        <div className=' w-1/4   items-start justify-evenly border' >
            <Editor language='html' font='fa-html5' setLanguage={setHtml} code={html}/> 
            <Editor language='css' setLanguage={setCss} font='fa-css3-alt' code={css}/>
            <Editor language='javascript' font='fa-square-js' setLanguage={setJs} code={js}/>
          </div> 
          <button onClick={handleSave}>save</button>
      <OutputConsole srcDoc={srcDoc}/>    
      <ToastContainer/>
        </section> 
    </>
  )
}
