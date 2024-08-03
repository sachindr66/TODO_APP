import React, { useState } from 'react';
import './DropArea.css';

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  const handleDragEnter = () => setShowDrop(true);
  const handleDragLeave = () => setShowDrop(false);
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop();
    setShowDrop(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setShowDrop(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    onDrop();
    setShowDrop(false);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={showDrop ? 'drop_area' : 'hide_drop'}
    >
      here
    </div>
  );
};

export default DropArea;
