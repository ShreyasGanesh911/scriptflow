import React from 'react'
import CardDropDown from './CardDropDown'
type Props = {
    projectName:string,
    _id:string,
    version:string,
    language:string
}
export default function SnippetCard({projectName,_id,version,language}:Props) {
  return (
    <>
      <div className='border w-80 h-32 rounded my-2'>
              <p className='w-full  h-1/2 text-2xl flex items-center pl-2 truncate'>{projectName}</p>   
              <div className='h-1/2  w-full  flex'>
                <div className='w-3/4 h-full capitalize'>
                  <p className='h-1/2 px-2'><span className='text-sm'>Language:</span> {language}</p>
                  <p className='h-1/2 px-2'><span className='text-sm'>Version:</span> {version}</p>
                </div>
                <div className='w-1/4  h-full displayFlex'><CardDropDown type='snippet' id={_id}/></div>
              </div>     
        </div>
    </>
  )
}
