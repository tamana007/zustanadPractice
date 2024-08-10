import React from 'react'
import './Task.css'
import classNames from 'classnames';


function Task({title}) {
  const status='DONE';
  return (
    <div className='task'>
      <div>{title}</div>
      <div className='bottonWrapper'> 
        <div></div>
        {/* <div className=(classNames("status",status))>{status}</div>
       */}

<div className={classNames("status", status)}>{status}</div>

      </div>
    </div>
  )
}

export default Task
