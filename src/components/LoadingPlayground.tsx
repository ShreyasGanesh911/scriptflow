import React from 'react'

export default function LoadingPlayground() {
  return (
    <section className='page flex cursor-wait'>
      <div className='w-1/4 h-full ' style={{height:'100vh'}}>
            <div className='w-full h-1/3 bg-slate-950 p-2 border animate-pulse'></div>
            <div className='w-full h-1/3 bg-slate-950 p-2 border animate-pulse'></div>
            <div className='w-full h-1/3 bg-slate-950 p-2 border animate-pulse'></div>
      </div>
      <div className='w-3/4 h-full bg-slate-950 displayFlex' style={{height:"100vh"}}>
        <p className='font-mono text-3xl text-white'>Loading <span className='animate-ping'>...</span></p>
      </div>
    </section>
  )
}
