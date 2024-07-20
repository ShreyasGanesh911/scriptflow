import axios from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastError, toastSuccess } from '../Toast'
type Props = {
    setForm:  Dispatch<SetStateAction<boolean>>;
}
export default function SignupForm({setForm}:Props) {
    const [cred,setCred] = useState({email:'',password:'',name:''})
    const navigate = useNavigate()
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data = {email:cred.email,password:cred.password,name:cred.name}
        axios.post("http://localhost:4000/user/signup",data,{withCredentials:true}).then(({status,data})=>{
            toastSuccess("Account created")
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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Name </label>
            <input
              type="text"
              name="name"
              onChange={(e)=>{setCred({...cred,[e.target.name]:e.target.value})}}
              value={cred.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email </label>
            <input
              type="email"
              name="email"
              onChange={(e)=>{setCred({...cred,[e.target.name]:e.target.value})}}
              value={cred.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={cred.password}
              onChange={(e)=>{setCred({...cred,[e.target.name]:e.target.value})}}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
          <p className='w-full flex flex-row-reverse mt-1'><button className='text-indigo-800 underline' onClick={()=>setForm(true)}>Have an account ?</button></p>
        </form>
      </div> 
    </>
  )
}
