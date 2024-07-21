import React from 'react'
type Props = {
    srcDoc : string
}
export default function OutputConsole({srcDoc}:Props) {
  return (
    <>
    <div className='w-full bg-white ' style={{height:'90vh'}}>
        <iframe className='border w-full h-full    ' sandbox="allow-scripts" srcDoc={srcDoc} title='HTML CSS JS'/> 
    </div> 
    </>
  )
}
