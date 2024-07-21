import React, { Dispatch,SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastError, toastSuccess } from '../Toast'
import axios from 'axios'

type Props = {
    setForm:  Dispatch<SetStateAction<boolean>>;
}
export default function LoginForm({setForm}:Props) {
    const [cred,setCred] = useState({email:'',password:''})
    const navigate = useNavigate()
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data = {email:cred.email,password:cred.password}
        axios.post("http://localhost:4000/user/login",data,{withCredentials:true}).then(({status,data})=>{
            toastSuccess("Logged in")
            return setTimeout(()=>{navigate('/')},3000)
        }).catch((e)=>{
            if(e.response.status !==500){
                toastError(e.response.data.message)
            }
            else
            toastError("Internal server error")
})
    }
  return (
    <>
              <div className=" p-8 rounded-lg shadow-lg w-full max-w-sm bg-slate-900">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-500">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-indigo-500">Email </label>
            <input
              type="email"
              name="email"
              placeholder='Enter email'
              onChange={(e)=>{setCred({...cred,[e.target.name]:e.target.value})}}
              value={cred.email}
              className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-indigo-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={cred.password}
              placeholder='password'
              onChange={(e)=>{setCred({...cred,[e.target.name]:e.target.value})}}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className='w-full flex flex-row-reverse mt-1'><button className='text-indigo-500 underline' onClick={()=>setForm(false)} >New here ?</button></p>
        </form>
      </div> 
    </>
  )
}
