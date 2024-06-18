import React, { Dispatch, SetStateAction, useState } from 'react'
import { languages } from '../Constants/Languages'
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
}
export default function EditorHead({code,setError,setValue}:Props) {
    const [language,setLanguage] = useState("javascript")
    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        console.log(language)
        const body = {
          language : language,
          //version : "18.15.0",
          version : "3.10.0",
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
          console.log(response.status)
        const data:Output = await response.json()
        data.run.stderr ? setError(true) : setError(false)
        const repo = data.run.output.split('\n')
        console.log(data.run.stderr)
        setValue(repo)
        }catch(e){
          console.log(e)
        }
      }
  return (
    <>
            <div className='w-full flex bg-slate-900 flex-row-reverse px-5 py-2  m-1 justify-between '>
            <button className='border border-white bg-slate-900 text-green-500 py-3 px-2 rounded hover:bg-slate-800' onClick={handleClick}>Run <i className=" mx-1 fa-solid fa-play text-green-500"></i></button>
            <select className='py-3 px-1 rounded capitalize bg-slate-900 border text-white' id="cars" onChange={(e)=>setLanguage(e.currentTarget.value)}>
              {languages.map(e=><option className='capitalize' selected = {e==='javascript'} value={e}>{e}</option>)}
            </select>
            </div> 
    </>
  )
}
