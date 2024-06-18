import React, { useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
type Output = {
  language: string,
  version : string,
  run : {
    output : string
  }
}
export default function Home() {
  const [value,setValue] = useState<string[]>()
  const [code,setCode] = useState<string | undefined>()
  const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log(code)
    const body = {
      language : "javascript",
      version : "18.15.0",
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
    const repo = data.run.output.split('\n')
    //setValue()
    setValue(repo)
    console.log(data.run.output.split('\n'))
    console.log(data)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
     <section className='page flex flex-col '>
     <Editor height="90vh" theme='vs-dark'  defaultLanguage='javascript' width="50vw" language='python'  defaultValue="// some comment" value={code} onChange={(e)=>setCode(e)} />

     <button onClick={handleClick}>click me</button>
     <div className="w-full bg-pink-100 h-96">
        {value?.map(e=><h1>{e}</h1>)}

     </div>
    </section> 
    </>
  )
}
// https://emkc.org/api/v2/piston