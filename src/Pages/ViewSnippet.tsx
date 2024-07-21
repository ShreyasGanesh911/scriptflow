import { Editor } from '@monaco-editor/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Output from '../components/Output'
import { toastError, toastSuccess } from '../Toast'
import { ToastContainer } from 'react-toastify'
import { compileCode } from '../Hooks/CompileCode'
type Output = {
    language: string,
    version : string,
    run : {
      output : string,
      stderr : string
    }
  }
  type Result = {success:boolean,value:string[]}
export default function ViewSnippet() {
    const navigate = useNavigate()
    const location = useLocation()
    const [language,setLanguage] = useState<string|undefined>()
    const [title,setTitle] = useState('')
    const [value,setValue] = useState<string[]>()
    const [error,setError] = useState<boolean>(false)
    const [version,setVersion] = useState<string>("")
    const [code,setCode] = useState<string | undefined>()

    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const result:Result|undefined = await compileCode({language,version,code})
        console.log(result)
        if(result?.success){
          toastSuccess("Executed the code ")
          setValue(result?.value)
        }
        else{
          toastError("Error in code ")
          setValue(result?.value)
        }

       }



    const getData = async()=>{
        const id = location.pathname.split('/')[2] || '669893be9c2742cb2538e8c0'
        
        if(!id)
          console.log("No id found")
        else{
          axios.get(`http://localhost:4000/snippet/singleproject?projectId=${id}`,{withCredentials:true}).then((e)=>{
            console.log(e.data.result)
            const data = {language:e.data.result.language,version:e.data.result.version}
            setLanguage(e.data.result.language)
            setCode(e.data.result.content)
            setVersion(e.data.result.version)
            setTitle(e.data.result.projectName)
          }).catch((e)=>{
            navigate('/editor')
            console.log(e)})
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
     <section className="page flex bg-black">
     <Editor height="90vh" theme='vs-dark'  defaultLanguage='java' width="50vw" language={language}   value={code} onChange={(e)=>setCode(e)} />
     <div className='w-1/2 p-1'>
     <div className=' w-full flex px-5 justify-between items-center'>
        <p className='text-white'>{title}</p>
        <button onClick={handleClick} className='text-green-500 border border-green-600 py-1 px-2 rounded'>Run</button></div>
          <h2 className='text-white p-2 w-full border-b'>Output</h2>
          <Output error={error} value={value}/>
        </div>
        <ToastContainer/>
        </section> 
    </>
  )
}
