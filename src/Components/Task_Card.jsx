import React from 'react'
import Tag from './Tag'
import delet from '../assets/delete.svg'

const Task_Card = ({title,tags, handleDelete,index, setActiveCard}) => {
  const handleTouchStart = (e) => {
    setActiveCard(index);
    e.target.addEventListener('touchmove', handleTouchMove);
    e.target.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    // You can add more logic here if needed
  };

  const handleTouchEnd = (e) => {
    setActiveCard(null);
    e.target.removeEventListener('touchmove', handleTouchMove);
    e.target.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className='task_card'
    draggable
    onDragStart={()=>setActiveCard(index)}
    onDragEnd={()=>{setActiveCard(null)}}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    
    >
              <p className='title'>{title}</p>
        <div className='card_tags'>
            {
                tags.map((tag, index)=> <Tag key={index} tagName={tag} selected/>)
            }
        </div>
        <button className='delete_btn' onClick={()=>handleDelete(index)}>
          <img className='delet_icon' src={delet} alt="" width={20} height={20} />Delet
          </button>
    </div>
  )
}

export default Task_Card
