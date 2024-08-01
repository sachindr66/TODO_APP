import React from 'react'
import Tag from './Tag'

const Task_Card = ({title,tags, handleDelete,index}) => {

  return (
    <div className='task_card'>
        <p className='title'>{title}</p>
        <div className='card_tags'>
            {
                tags.map((tag, index)=> <Tag key={index} tagName={tag} selected/>)
            }
        </div>
        <button className='delete_btn' onClick={()=>handleDelete(index)}>Delet</button>
    </div>
  )
}

export default Task_Card
