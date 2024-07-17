import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav className='w-full   border displayFlex h-20 sticky top-0 z-40 bg-white' >
        <div className='w-3/4 flex justify-between items-center'>
            <p className='xl:text-2xl lg:text-2xl '><NavLink to='/'>ScriptFlow</NavLink></p>
        <ul className='flex'>
            <li className='mx-3 capitalize'><NavLink to='/playground'>playground</NavLink></li>
            <li className='mx-3 capitalize'><NavLink to=''>snippets</NavLink></li>
            <li className='mx-3 capitalize'><NavLink to="">Developers</NavLink></li>
            <li className='mx-3 capitalize'><NavLink to='/editor'>Compilers</NavLink></li>
        </ul>
        <div>
            <NavLink to='/account'><p><i className="fa-solid fa-user mx-2"></i>Account</p></NavLink>
        </div>
        </div>
     </nav> 
    </>
  )
}
