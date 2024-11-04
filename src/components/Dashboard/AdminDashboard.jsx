import React from 'react'
import Header from '../Others/Header'
import CreateTaskdmin from '../Others/CreateTaskdmin'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-5'>
        <Header/>
        

        <CreateTaskdmin/>
        <AllTask/>

    </div>
  )
}

export default AdminDashboard