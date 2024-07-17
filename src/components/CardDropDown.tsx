import React, { useState } from 'react'

export default function CardDropDown() {
    const [show,setShow] = useState(false)
  return (
    <>
     <div className='relative w-1/4 h-full  displayFlex'>
              <button className='w-full h-full  outline-none text-2xl' onClick={()=>show?setShow(false):setShow(true)}><i className="fa-solid fa-bars"></i></button>
              <div className={`border-black rounded h-20 w-20 border bg-white absolute top-10 ${!show?"hidden":""}`}>
                <p className='w-full text-center hover:bg-slate-200'>Edit</p>
                <p className='w-full text-center hover:bg-slate-200'>Delete</p>
                <p className='w-full text-center hover:bg-slate-200'>Edit</p>
              </div>
             </div> 
    </>
  )
}
