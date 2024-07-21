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
      <div className='border 2xl:w-80 lg:w-72 2xl:h-32 lg:h-24 rounded my-2'>
              <p className='w-full  h-1/2 text-2xl flex items-center pl-2 truncate'>{projectName}</p>   
              <div className='h-1/2  w-full  flex'>
                <div className='w-3/4 h-full capitalize'>
                  <p className='h-1/2 px-2'><span className='text-sm text-indigo-500'>Language:</span> {language}</p>
                  <p className='h-1/2 px-2'><span className='text-sm text-yellow-400'>Version:</span> {version}</p>
                </div>
                <div className='w-1/4  h-full displayFlex'><CardDropDown type='snippet' id={_id}/></div>
              </div>     
        </div>
    </>
  )
}
