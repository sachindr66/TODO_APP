import React from 'react'
import Tag from './Tag'
import delet from '../assets/delete.svg'

const Task_Card = ({title,tags, handleDelete,index, setActiveCard}) => {

  return (
    <div className='task_card'
    draggable
    onDragStart={()=>setActiveCard(index)}
    onDragEnd={()=>{setActiveCard(null)}}
    
    >
              <p className='title'>{title}</p>
        <div className='card_tags'>
            {
                tags.map((tag, index)=> <Tag key={index} tagName={tag} selected/>)
            }
        </div>
        <button className='delete_btn' onClick={()=>handleDelete(index)}><img className='delet_icon' src={delet} alt="" width={20} height={20} />Delet</button>
    </div>
  )
}

export default Task_Card
