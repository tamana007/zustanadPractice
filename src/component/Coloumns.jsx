import React from 'react'
import './Coloumn.css'
import Task from './Task'

function Coloumns({state}) {
  return (
    <div className='coloumn'>
        <p>{state}</p> 
        <Task title="Todo"/>
    </div>
  )
}

export default Coloumns
