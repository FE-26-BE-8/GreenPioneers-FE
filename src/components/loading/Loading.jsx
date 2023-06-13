import React from 'react';
import './Loading.css'; // Import file CSS untuk styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div>
        <div className="loading-spinner"></div>
        </div>
      <div className='loading-text'>
      <h3>Harap Sabar ini Ujian..</h3>
      </div>
    </div>
  );
};

export default Loading;
