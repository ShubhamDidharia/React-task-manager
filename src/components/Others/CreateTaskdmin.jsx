import React from 'react'
import { useState } from 'react'

const CreateTaskdmin = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [appending, setAppending] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault()

        setAppending({title,date,category,description,active:false, new:true,completed:false,failed:false})
        const data=JSON.parse(localStorage.getItem('employees'))

        data.forEach((ele)=>{
            if(assignTo == ele.name){
                ele.tasks.push(appending)

                console.log(ele)
            }
        })

        setAssignTo('')
        setCategory('')
        setDate("")
        setDescription('')
        setTitle('')
    }
    
  return (
    <div  className='mt-3 bg-[#1c1c1c] px-3 py-4 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e) 
            }}className='flex flex-wrap items-center justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Add Title</h3>
                        <input value={title} onChange={(e)=>{
                            setTitle(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='give title' />
                    </div>
                    

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value ={date} onChange={(e)=>{
                            setDate(e.target.value)

                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" placeholder='give date' />
                    </div>
                    
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={assignTo} onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='add assignment' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='add category' />
                    </div>
                </div>
                <div className='flex-col items-start w-2/5 '>
                    
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description} onChange={(e)=>{
                        setDescription(e.target.value)
                    }}  className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="add info" id="" cols='33' rows='10'></textarea>
                   
                    <button className=' bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-5 w-full mt-4 rounded'>Submit</button>
                </div>
                
                
                

            </form>

        </div>
  
  )
}

export default CreateTaskdmin