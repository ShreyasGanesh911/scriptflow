import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Login() {
    const [form,setForm] = useState<boolean>(true)
  return (
    <section className='page displayFlex bg-black text-white'> 
          {form ? <LoginForm  setForm={setForm}/>: <SignupForm setForm={setForm}/>}
        <ToastContainer/>
    </section>
  )
}
