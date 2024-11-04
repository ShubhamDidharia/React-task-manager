import React from 'react'

const Header = ({data}) => {

  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()


  }
  return (
    <>
    <div className='flex items-center justify-between '>
        <h1 className='text-2xl'>Hello <br/> <span className='text-3xl font-semibold'> {data?data.name :"Admin ji"}</span> </h1>
        <button onClick={logOut} className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm'>Log Out</button>
    </div>
    </>
  )
}

export default Header
