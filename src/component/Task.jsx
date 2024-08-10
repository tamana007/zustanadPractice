import React from 'react'
import './Task.css'
import classNames from 'classnames';


function Task({title}) {
  const status='ONGOING';
  return (
    <div className='task'>
      <div>{title}</div>
      <div className='bottonWrapper'> 
        <div></div>

<div className={classNames("status", status)}>{status}</div>

      </div>
    </div>
  )
}

export default Task
