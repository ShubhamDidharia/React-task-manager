import React from 'react'
import Header from '../Others/Header'
import TaskListNum from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <>  
    
        
    
    <div className='p-10 bg-[#1c1c1c] h-screen overflow-y-auto'>
        <Header data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>
    </div>

    </>
  )
}

export default EmployeeDashboard