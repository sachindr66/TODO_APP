
import React from 'react'
import Task_Card from './Task_Card'
import './Task_Card.css'

const TaskColumn = ({title,icon, tasks, status, handleDelete}) => {
  return (
    <div className='tasks'>
        <section className='task_column'>
            <h2 className='task_heding'><img className='icon' src={icon} alt="" width={20} height={20} />{title}</h2>
        {tasks.map((task,index)=> task.status === status && (
        <Task_Card key={index}
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            index={index}
            />
        )
    )}
    </section>
    </div>
  )
}

export default TaskColumn