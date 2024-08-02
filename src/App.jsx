import React, { useEffect, useState } from 'react'
import Todo_form from './Components/Todo_form'
import './App.css'
import TaskColumn from './Components/TaskColumn'
import progress from './assets/progress.png'
import todo from './assets/todo.png'
import done from './assets/correct.png'

const oldTask=localStorage.getItem("tasks")
console.log(oldTask)

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard]=useState(null)

  useEffect(()=>{
    localStorage.setItem("tasks",  JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (tsakIndex) => {
      const newTasks = tasks.filter((task,index)=> index !== tsakIndex)
      setTasks(newTasks)
    }

    const onDrop=(status, position)=>{
      console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)
      
      if(activeCard == null || activeCard === undefined) return;
      
      const taskToMove = tasks[activeCard]
      const updatedTasks= tasks.filter((task,index)=> index !== activeCard)
      updatedTasks.splice(position, 0,{
        ...taskToMove,
        status: status
      })
      setTasks(updatedTasks)
    }

  return (
    <div className='app'>
      <Todo_form setTasks={setTasks} />
      <main className='app_main'>
        <div className='taskcolum'>
        <TaskColumn 
        title='To-Do' 
        icon={todo} 
        tasks={tasks} 
        status="todo"
        handleDelete={handleDelete} 
        setActiveCard={setActiveCard}
        onDrop={onDrop}
        />

        <TaskColumn 
        title='Progress' 
        icon={progress} 
        tasks={tasks} 
        status="Progress" 
        handleDelete={handleDelete} 
        setActiveCard={setActiveCard}
        onDrop={onDrop}
        />

        <TaskColumn 
        title='Done' 
        icon={done} 
        tasks={tasks} 
        status="done" 
        handleDelete={handleDelete} 
        setActiveCard={setActiveCard}
        onDrop={onDrop}
        />
        </div>
      </main>
      <h1>active card- {activeCard}</h1>
    </div>
  )
}

export default App
