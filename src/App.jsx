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
        <div className='taskcolum'>
        <TaskColumn 
        title='To-Do' 
        icon={todo} 
        tasks={tasks} 
        status="todo"
        handleDelete={handleDelete} 
        />

        <TaskColumn 
        title='Progress' 
        icon={progress} 
        tasks={tasks} 
        status="Progress" 
        handleDelete={handleDelete} 
        />

        <TaskColumn 
        title='Done' 
        icon={done} 
        tasks={tasks} 
        status="done" 
        handleDelete={handleDelete} 
        />
        </div>
      </main>
    </div>
  )
}

export default App
