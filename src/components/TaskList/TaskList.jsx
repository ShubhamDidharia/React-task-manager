import React from 'react'
import AcceptTask from './AcceptTask'
import CreateTask from './CreateTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist'className='overflow-x-auto py-5 h-[85%] w-full flex items-center justify-start gap-5 flex-nowrap mt-10 rounded-lg'>
        {/* <AcceptTask/>

        <CreateTask/>
        <CompleteTask/>
        <FailedTask/> */}
        {data.tasks.map((ele,i)=>{
            if(ele.active){
                return<AcceptTask key={i} data={ele}/>
            }
            if(ele.new){
                return<CreateTask  key={i}  data={ele}/>
            }
            if(ele.completed){
                return<CompleteTask  key={i}  data={ele}/>
            }
            if(ele.failed){
                return<FailedTask  key={i}  data={ele}/>
            }
        })}
        
        
        
    </div>
  )
}

export default TaskList