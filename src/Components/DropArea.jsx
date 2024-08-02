import React, { useState } from 'react';
import './DropArea.css';

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop();
    setShowDrop(false);
  };

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onTouchStart={() => setShowDrop(true)}
      onTouchEnd={(e) => {
        e.preventDefault();
        setShowDrop(false);
      }}
      onTouchMove={(e) => e.preventDefault()}
      className={showDrop ? 'drop_area' : 'hide_drop'}
    >
      Here
    </div>
  );
};

export default DropArea;
