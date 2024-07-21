import axios from 'axios'
import React, { useState } from 'react'
type Props = {
  id:string,
  type:string
}
export default function CardDropDown({id,type}:Props) {
    const [show,setShow] = useState(false)
    const handleDelete = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      const data = {projectId:id}
      axios.post(`http://localhost:4000/${type}/remove`,data,{withCredentials:true}).then(e=>{
        console.log(e)
        window.location.reload();
      }).catch(e=>{console.log(e)})
    }
  return (
    <>
     <div className='relative w-1/4 h-full  displayFlex bg-black text-white ' onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>
              <button className='w-full h-full  outline-none text-2xl' ><i className="fa-solid fa-bars"></i></button>
              <div className={`border-white bg-black rounded  w-20 border  absolute top-10 ${!show?"hidden":""}`}>
                <button onClick={(e)=>{}} className='w-full text-center hover:bg-slate-900 py-1'>Edit</button>
                <button onClick={handleDelete} className='w-full text-center hover:bg-slate-900 py-1'>Delete</button>

              </div>
             </div> 
    </>
  )
}
