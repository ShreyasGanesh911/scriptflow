import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';  // Optional: Change theme if needed
import 'codemirror/mode/javascript/javascript';  // Optional: Add language modes
import { toastSuccess } from '../Toast';
type Props = {
  language : string,
  setLanguage : React.Dispatch<React.SetStateAction<string>>,
  code:string,
  font:string
}
export default function Editor({language,setLanguage,code,font}:Props) {
  const [color,setColor] = useState<string>()
  const options = {
        lineWrapping: true,lint: true,
        mode: language,
        theme: 'material',
        lineNumbers: true,
        autoCloseTags: true,
  } 
  const setColorFunction = ()=>{
if(language === 'html')
      setColor("text-red-500")
  else if (language === 'css')
    setColor("text-blue-500")
else
  setColor("text-yellow-500")
  }
  //navigator.clipboard.writeText(text)
  const handleCopy = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    navigator.clipboard.writeText(e.currentTarget.value)
    toastSuccess("Code copied successfully")
  }
 useEffect(()=>{ setColorFunction()},[])
  return (
    <div className=' w-full h-1/3 justify-start flex flex-col   border border-black overflow-hidden'>
        <p className={`uppercase ${language==='javascript' && 'capitalize'} h-8 text-xl text-center pb-1 flex justify-center items-center  `}><span><i className={`fa-brands ${color} ${font} text-2xl pt-2 mx-2`}></i></span>{language}
          <button className='hover: hover:bg-slate-200' value={code} onClick={handleCopy}><i className="fa-regular fa-copy mx-5 "></i></button>
        </p>
        <CodeMirror
          className='h-5/6 '
          value={code}
          options={options}
          onBeforeChange={(editor, data, value) =>setLanguage(value)}
          onChange={(editor, data, value) => setLanguage(value)}
        />
        
    </div>
  )
}
