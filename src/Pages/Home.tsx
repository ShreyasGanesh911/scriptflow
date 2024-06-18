import { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import Output from '../components/Output';
import EditorHead from '../components/EditorHead';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [value,setValue] = useState<string[]>()
  const [code,setCode] = useState<string | undefined>()
  const [error,setError] = useState<boolean>(false)
  
  // useEffect(()=>{
  //   window.onbeforeunload = (e)=>{
  //       return ""
  //   }
  // })
  return (
    <>
     <section className='page flex bg-black p-5'>
        <Editor height="90vh" theme='vs-dark'  defaultLanguage='javascript' width="50vw" language='python'  defaultValue="// some comment" value={code} onChange={(e)=>setCode(e)} />
        <div className='w-1/2 p-1'>
          <EditorHead code={code} setError={setError} setValue={setValue}/>
          <h2 className='text-white p-2 w-full border-b'>Output</h2>
          <Output error={error} value={value}/>
        </div>
    </section> 
    <ToastContainer />
    </>
  )
}