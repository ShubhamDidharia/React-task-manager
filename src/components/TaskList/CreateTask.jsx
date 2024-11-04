import React from 'react'

const CreateTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-black text-sm py-1 px-3 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-3'> {data.description}</p>
        <div className='bg-red-800 text-sm py-1 px-3 rounded w-fit mt-4' >
            <button>Accept</button>
        </div>

    </div>
  )
}

export default CreateTask