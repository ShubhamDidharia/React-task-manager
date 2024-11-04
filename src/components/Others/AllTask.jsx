import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData=useContext(AuthContext)
  return (
    
    <div id= 'alllistscroll'className=' h-80 rounded p-5 mt-10 bg-[#1c1c1c]  '>

        <div className='w-full flex justify-between bg-blue-500 p-2 mb-3 rounded'>
            <h3 className='w-1/5 font-bold' >Name</h3>
            <h3 className='w-1/5 font-bold '>New</h3>
            <h3 className='w-1/5 font-bold'>Active</h3>
            <h3 className='w-1/5 font-bold'>Completed</h3>
            <h3 className='w-1/5 font-bold'>Failed</h3>


        </div>
        <div className='overflow-auto '>
        {authData.employees.map(function (ele,i){
            return <div key={i} className='w-full flex justify-between bg-transparent border-2 border-gray-300 p-2 mb-3 rounded '>
                        <h3 className='w-1/5 text-blue-300 font-semibold'>{ele.name}</h3>
                        <h3 className='w-1/5 '>{ele.taskCount.new}</h3>
                        <h3 className='w-1/5 '>{ele.taskCount.active}</h3>
                        <h3 className='w-1/5 '>{ele.taskCount.completed}</h3>
                        <h3 className='w-1/5 '>{ele.taskCount.failed}</h3>


                    </div>

        })}
        </div>
        {/* <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div>
        <div className='w-full flex justify-between bg-red-300 p-2 mb-3 rounded'>
            <h2>Sarthak</h2>
            <h3>Do task</h3>
            <h5>Status</h5>

        </div> */}

    </div>
  )
}

export default AllTask