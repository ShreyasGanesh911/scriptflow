import React from 'react'
type Props = {
    srcDoc : string
}
export default function OutputConsole({srcDoc}:Props) {
  return (
    <>
    <div className='w-full h-2/5  ' style={{height:'60vh'}}>
    {/* <div className='h-10 bg-red-500 w-full'>
      <button className='bg-green-600 px-3 py-2 rounded'>Run</button>
      <button>Theme</button>
    </div> */}
        <iframe className='border w-full h-full    ' sandbox="allow-scripts" srcDoc={srcDoc} title='HTML CSS JS'/> 
    </div> 
    </>
  )
}
