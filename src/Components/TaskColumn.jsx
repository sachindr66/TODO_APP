
import React from 'react'
import Task_Card from './Task_Card'
import './Task_Card.css'
import DropArea from './DropArea'

const TaskColumn = ({ title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop
}) => {
  return (
    <div className='tasks'>
      <section className='task_column'
      onDrop={() => onDrop(status)}
       onDragOver={(e) => e.preventDefault()} >
        <h2 className='task_heding'><img className='icon' src={icon} alt="" width={20} height={20} />{title}</h2>
        <DropArea onDrop={() => onDrop(status, 0)} />
        {tasks.map((task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <Task_Card
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
        <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
        )}
      </section>
    </div>
  )
}

export default TaskColumn