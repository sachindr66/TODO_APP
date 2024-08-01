import React, { useEffect, useState } from 'react'
import Todo_form from './Components/Todo_form'
import './App.css'
import TaskColumn from './Components/TaskColumn'
import todo from './assets/react.svg'

const oldTask=localStorage.getItem("tasks")
console.log(oldTask)

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || [])

  useEffect(()=>{
    localStorage.setItem("tasks",  JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (tsakIndex) => {
      const newTasks = tasks.filter((task,index)=> index !== tsakIndex)
      setTasks(newTasks)
    }

  return (
    <div className='app'>
      <Todo_form setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn 
        title='To-Do' 
        icon={todo} 
        tasks={tasks} 
        status="todo"
        handleDelete={handleDelete} 
        />

        <TaskColumn 
        title='Progress' 
        icon={todo} 
        tasks={tasks} 
        status="Progress" 
        handleDelete={handleDelete} 
        />

        <TaskColumn 
        title='Done' 
        icon={todo} 
        tasks={tasks} 
        status="done" 
        handleDelete={handleDelete} 
        />
      </main>
    </div>
  )
}

export default App
