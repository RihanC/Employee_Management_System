import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("email is" ,email)
    console.log("password is ", password)

    setEmail("")
    setpassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl'>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center p-20 rounded-xl'>
          <input 
          value={email}
          onChange={(e) =>{
            setEmail(e.target.value)
          }}
          required 
          className='outline-none border-2 border-emerald-600 rounded-full px-5 py-3' type="email" placeholder='Enter your email' 
          />
          <input 
          value={password}
          onChange={(e) =>{
            setpassword(e.target.value)
          }}
          required 
          className='outline-none border-2 border-emerald-600 rounded-full px-5 py-3 mt-3' type="password" placeholder='Enter password' />
          <button className= ' text-white border-2 outline-none text-xl bg-emerald-600 mt-3 rounded-full px-8 py-3'> Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
