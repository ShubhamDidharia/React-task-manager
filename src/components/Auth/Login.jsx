import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    console.log(handleLogin)
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("email: ",email)
        console.log("password: ",password)

        setemail('')
        setpassword('')
    }
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-400 p-20 rounded-md bg-[#1c1c1c]' >
            <form onSubmit={(e)=>{
                submitHandler(e)


            }}  className='flex flex-col justify-center items-center gap-6'>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                    
                }}
                
                className='text-xl outline-none border-2 border-emerald-400 rounded-full py-2 px-4 bg-transparent placeholder:text-white ' type='email' placeholder='Enter email' />
                <input
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                    
                }}
                
                
                className='text-xl outline-none border-2 border-emerald-400 rounded-full py-2 px-4 bg-transparent placeholder:text-white ' type="password" placeholder='Enter password' />
                <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full'>Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Login