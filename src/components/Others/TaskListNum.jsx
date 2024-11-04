import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex screen mt-10 gap-3'>
        <div className=' py-6 px-8 w-[40%] bg-red-500 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.new}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
        <div className=' py-6 px-8 w-[40%] bg-blue-500 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>

        </div>
        <div className=' py-6 px-8 w-[40%] bg-green-500 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>

        </div>
        <div className=' py-6 px-8 w-[40%] bg-purple-500 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>

        </div>
    </div>
  )
}

export default TaskListNum