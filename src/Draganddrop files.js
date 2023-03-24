import React, { useState } from 'react';
import _logo1 from './booking-images/Cloud upload.png'
import _rectancle from './booking-images/Rectangle 48.png'
const DragAndDropBox = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    // Handle dropped file(s) here
    const files = Array.from(e.dataTransfer.files);
    console.log(files);
  };

  return (
    <div
      className={`drag-and-drop-box ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
        <img src={_logo1} className="cloud-Logo" alt="cloud"/>
        <img src={_rectancle } className="rectangle-Logo" alt="line"/>

        <div className="app-text">
          <div className=" Text">
            <h4 className="h4">Upload Documents</h4>
            <h4 className="h4-1">Saved Documents </h4>
            <h1 className="h1"> Drag & Drop</h1>
            <h5 className="h5">Your Files Or Browse To Upload </h5>
            <h5 className="h5-1"> Only JPEG, PNG and PDF files with max size of 15MB</h5>
          </div>
        </div>
      </div>

  );
};

export default DragAndDropBox;