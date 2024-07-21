import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'
import OutputConsole from '../components/OutputConsole'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { toastError, toastSuccess } from '../Toast'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingPlayground from '../components/LoadingPlayground'

export default function PlayGround() {
  const location = useLocation()
  const navigate = useNavigate()
    const [Loading,setLoading] = useState(true)
    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    const [isOwner,setIsOwner] = useState(false)
    const [title,setTitle] = useState('')
    const [warning,setWarning] = useState(false)
    const [view,setView] = useState(true)
    const[currentView,setCurrentView] = useState('')
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
    
    const getData = async()=>{
      const id = location.pathname.split('/')[2] 
      if(!id)
        console.log("no id")
      else{
        axios.get(`http://localhost:4000/project/singleproject?projectId=${id}`).then((e)=>{
          
          setCss(e.data.result.css)
          setHtml(e.data.result.html)
          setJs(e.data.result.js)
          setTitle(e.data.result.projectName)
          setCurrentView(e.data.result.publicView?'Public':"Private")
        }).catch(e=>{
          navigate('/playground')
        })
      }
      setTimeout(()=>setLoading(false),1000)
    }

    const checkOwner = async()=>{
      const id = location.pathname.split('/')[2] 
      console.log("running")
      if(!id){
        setIsOwner(true)
        console.log("no id")
      }
        
      else{
        axios.get(`http://localhost:4000/project/checkownership?projectId=${id}`,{withCredentials:true}).then((e)=>{
          console.log("owner")
          setIsOwner(true)
        }).catch(e=>{
          console.log(e)
        })

      }
      
    }
    useEffect(()=>{
        getData()
    },[isOwner,setIsOwner])

    useEffect(()=>{
      checkOwner()
    },[])

    const handleSave = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      if(title===""){
        setWarning(true)
        setTimeout(()=>setWarning(false),3000)
        return toastError("Playground title is required ")
      }
      const id = location.pathname.split('/')[2] 
      const data = {
        projectName:title, html,css,js,publicView:view,projectId:id
      }
      axios.post("http://localhost:4000/project/add",data,{withCredentials:true}).then((data)=>{
          toastSuccess("Saved successfully")
          console.log(data)
      }).catch((e)=>{
        if(e.response.status!==500)
          return toastError(e.response.data.message)
        toastError("Internal server error")
        console.log(e.response.message)
      })
    }
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
      e.preventDefault()
      const value = e.currentTarget.value
      value === "Public" ? setView(true):setView(false)
    }
  return (
    <>
        <section className='page relative overflow-y-hidden bg-black text-white' >
         {Loading?<LoadingPlayground/>:
         <>
      {isOwner && <div className=' flex flex-row-reverse absolute top-0 right-0 text-black'>
          <button className='py-1 px-2 border bg-green-400 rounded mr-3' onClick={handleSave}>save</button>
          <select className='border outline-none mx-5 rounded p-1' onChange={handleSelect}>
                <option selected={currentView==="Public"} value="Public">Public</option>
                <option selected={currentView==="Private"} value="Private">Private</option>
              </select>
              <div className='w-full displayFlex'>
                <input type="text" placeholder='Playground name' className={`w-5/6 outline-none rounded ${warning ? "border-red-500":""} border p-2`} 
                  value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
          </div>}
        <div className='w-full flex'>
          
        <div className=' 2xl:w-1/4 w-2/5 h-full  overflow-hidden items-start justify-evenly border' style={{height:'90vh'}}>

            <Editor language='html' font='fa-html5' setLanguage={setHtml} code={html}/> 
            <Editor language='css' setLanguage={setCss} font='fa-css3-alt' code={css}/>
            <Editor language='javascript' font='fa-square-js' setLanguage={setJs} code={js}/>
          </div> 
        <OutputConsole srcDoc={srcDoc}/>
        </div>
        </>}
      <ToastContainer/>
        </section> 
    </>
  )
}
