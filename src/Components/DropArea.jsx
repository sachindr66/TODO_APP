import React, { useState } from 'react'
import './DropArea.css'

const DropArea = ({onDrop}) => {

    const [showDrop, setShowDrop]=useState(false)
  return (
    <div 
    onDragEnter={()=>{setShowDrop(true)}}
    onDragLeave={()=>{setShowDrop(false)}}
    onTouchStart={() => setShowDrop(true)}
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
