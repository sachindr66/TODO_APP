import React, { useState, useSyncExternalStore } from 'react'
import './DropArea.css'

const DropArea = ({onDrop}) => {

    const [showDrop, setShowDrop]=useState(false)

    const handleTouchMove = (e) => {
      e.preventDefault();
    };
  
    const handleTouchEnd = (e) => {
      setShowDrop(false);
      onDrop();
    };
    
  return (
    <div 
    onDragEnter={()=>{setShowDrop(true)}}
    onDragLeave={()=>{setShowDrop(false)}}
    onTouchStart={() => setShowDrop(true)}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    onDrop={()=>{
        onDrop();
        setShowDrop(false)
    }}
    onDragOver={e => e.preventDefault()}
    className={showDrop? "drop_area": "hide_drop"}>
      here
    </div>
  )
}

export default DropArea
