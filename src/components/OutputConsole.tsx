import React from 'react'
type Props = {
    srcDoc : string
}
export default function OutputConsole({srcDoc}:Props) {
  return (
    <>
    <div className='w-full  ' style={{height:'90vh'}}>
    {/* <div className=' bg-red-500 w-full flex flex-row-reverse py-2 px-5' >
      <button className='bg-green-600 px-3 py-2 rounded'>Run</button>
    </div> */}
        <iframe className='border w-full h-full    ' sandbox="allow-scripts" srcDoc={srcDoc} title='HTML CSS JS'/> 
    </div> 
    </>
  )
}
