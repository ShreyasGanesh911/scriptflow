import React, { useEffect, useState } from 'react'
import Editor from '../components/Editor'
import OutputConsole from '../components/OutputConsole'
import { ToastContainer } from 'react-toastify'

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
    
  return (
    <>
        <section className='page'>
        <div className='flex w-full   items-start justify-evenly '>
            <Editor language='html' font='fa-html5' setLanguage={setHtml} code={html}/> 
            <Editor language='css' setLanguage={setCss} font='fa-css3-alt' code={css}/>
            <Editor language='javascript' font='fa-square-js' setLanguage={setJs} code={js}/>
          </div> 
      <OutputConsole srcDoc={srcDoc}/>    
      <ToastContainer/>
        </section> 
    </>
  )
}
