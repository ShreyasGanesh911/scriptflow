import { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import Output from '../components/Output';
import EditorHead from '../components/EditorHead';
import { ToastContainer } from 'react-toastify';
import { languages } from '../Constants/Languages';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditorPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [value,setValue] = useState<string[]>()
  const [code,setCode] = useState<string | undefined>(languages[1].snippet)
  const [error,setError] = useState<boolean>(false)
  const [language,setLanguage] = useState<string>(JSON.stringify(languages[1]))
  const getData = async()=>{
      const id = location.pathname.split('/')[2] || '669893be9c2742cb2538e8c0'
      
      if(!id)
        console.log("No id found")
      else{
        axios.get(`http://localhost:4000/snippet/singleproject?projectId=${id}`,{withCredentials:true}).then((e)=>{
          console.log(e.data.result)
          const data = {language:e.data.result.language,version:e.data.result.version}
          setLanguage(JSON.stringify(data))
          setCode(e.data.result.content)
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
     <section className='page flex bg-black p-5'>
        <Editor height="90vh" theme='vs-dark'  defaultLanguage='java' width="50vw" language={JSON.parse(language).lang}   value={code} onChange={(e)=>setCode(e)} />
        <div className='w-1/2 p-1'>
          <EditorHead code={code} setCode={setCode} setError={setError} language={language} setLanguage={setLanguage} setValue={setValue}/>
          <h2 className='text-white p-2 w-full border-b'>Output</h2>
          <Output error={error} value={value}/>
        </div>
    </section> 
    <ToastContainer />
    </>
  )
}