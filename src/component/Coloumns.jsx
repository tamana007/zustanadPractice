import React from 'react'
import './Coloumn.css'
import Task from './Task'
import useStore from '../store'

function Coloumns({state}) {
  const tasks=useStore((store)=>store.tasks.filter((task)=>task.state===state))
  return (
    <div className='coloumn'>
        <p>{state}</p> 
        <Task title="Todo"/>
    </div>
  )
}

export default Coloumns
