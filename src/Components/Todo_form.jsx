import React, { useState } from 'react'
import Tag from './Tag'
import './Todo_form.css'

const Todo_form = ({setTasks}) => {

  const [data, setData]= useState({
    task:"",
    status:'todo',
    tags:[]
  })

  const cheking =(tag)=>{
    return data.tags.some((item)=> item === tag)
  }

  const handlechange=(e)=>{
    const {name, value }=e.target

    setData((pre)=>{
      return {...pre, [name]:value}
    })
  }
  const selectTag =(tag)=>{
    if(data.tags.some(item => item === tag)){
      const filterTags = data.tags.filter(item => item !== tag)
      setData(prev =>{
        return{...prev, tags:filterTags}
      })
    }else{
      setData(prev=>{
        return{...prev, tags:[...prev.tags, tag]}
      })
    }
  }
  // console.log(data.tags)

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    setTasks(prev=>{
      return[...prev, data]
    })
    setData( 
      {task:"",
      status:'todo',
      tags:[]}
    )
  }



  return (
      <header>
        <form action="" onSubmit={handlesubmit} className='form'>
          <div className='input_parent'>
          <input type="text" className='todo_input'
          placeholder='Enter your task'
          onChange={handlechange}
          name='task'
          value={data.task}
          />
          </div>
        <div className='tags_btn'>
          <div className='tags_form'>
            <Tag className="tags" tagName='HTML'selectTag={selectTag} selected={cheking("HTML")}/>
            <Tag className="tags" tagName='CSS' selectTag={selectTag} selected={cheking("CSS")} />
            <Tag className="tags" tagName='Javascript' selectTag={selectTag} selected={cheking("Javascript")} />
            <Tag className="tags" tagName='Reactjs' selectTag={selectTag} selected={cheking("Reactjs")} />
          </div>
          <div className='tags_select'>
          <div className="select_parent">
          <select name="status"  className="select" 
          value={data.status}
          onChange={handlechange}>
            <option className='options' value="todo">Todo</option>
            <option className='options' value="Progress">Progress</option>
            <option className='options' value="done">done</option>
          </select>
          </div>
          <button className='addtask_btn'>Add Task</button>
        </div>
        </div>
        </form>
      </header>
  )
}

export default Todo_form
