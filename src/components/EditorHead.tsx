import React, { Dispatch, SetStateAction, useState } from 'react'
import { languages } from '../Constants/Languages'
import { ToastContainer } from 'react-toastify'
import { toastError, toastSuccess } from '../Toast'
import axios from 'axios'
type Output = {
    language: string,
    version : string,
    run : {
      output : string,
      stderr : string
    }
  }

type Props = {
    code : string | undefined,
    setError : Dispatch<SetStateAction<boolean>>,
    setValue : Dispatch<SetStateAction<string[] | undefined>>
    setCode : Dispatch<SetStateAction<string | undefined>>
    setLanguage : Dispatch<SetStateAction<string>>
    language:string
}
export default function EditorHead({code,setError,setValue,setCode,language,setLanguage}:Props) {
     const [title,setTitle] = useState("")
     const [id,setId] = useState<null|string>()
    const handleSave = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()

        if(title==="")
          return toastError("Title is required")
        const selected = JSON.parse(language)
        const data = {projectName:title,language:selected.lang,version:selected.version,content:code,publicView:false,projectId:id}
        axios.post('http://localhost:4000/snippet/add',data,{withCredentials:true}).then((e)=>{
          toastSuccess("Snippet saved")
          setId(e.data.result._id)
          console.log(e.data.result._id)
        }).catch((e)=>{
          console.log(e)
        })
    }
    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const selected = JSON.parse(language)
        console.log(selected)
        const body = {
          language : selected.lang,
          version : selected.version,
          
          files :[
            {
              content :code
            }
          ]
        }
        try{
          const response = await fetch("https://emkc.org/api/v2/piston/execute",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify(body)
          })
          
        const data:Output = await response.json()
        console.log(data)
        setError(false)
        const repo = data.run.output.split('\n')
        
        setValue(repo)
        if(data.run.stderr){
            setError(true)
            toastError("Error in code !")
        }
        else{
            toastSuccess("Executed successfully")
        }

        
        }catch(e){
            toastError("Oops, Internal Server Error")
          console.log(e)
        }
      }
    const handleLanguageChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setLanguage(e.currentTarget.value)
        console.log(e.currentTarget.value)
        const selected = JSON.parse(e.currentTarget.value)
        console.log(selected)
        setCode(selected.snippet)
    }
  return (
    <>
            <div className='w-full flex bg-slate-900 flex-row-reverse px-5 py-2  m-1 justify-between '>
            <div>
            <button className='border border-white bg-slate-900 text-white py-3 px-4 mx-2 rounded hover:bg-slate-800' onClick={handleSave}>Save</button>
            <button className='border border-white bg-slate-900 text-green-500 py-3 px-2 rounded hover:bg-slate-800' onClick={handleClick}>Run <i className=" mx-1 fa-solid fa-play text-green-500"></i></button>
            </div>   
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border outline-none bg-slate-800 rounded text-white px-2' placeholder='Project name' />
            <select className='py-3 px-1 rounded capitalize bg-slate-900 border text-white' id="cars" onChange={handleLanguageChange}>
              {languages.map(e=><option className='capitalize' selected = {e.lang==='javascript'} value={JSON.stringify(e)}>{e.lang}</option>)}
            </select>
            </div> 
            
    </>
  )
}
