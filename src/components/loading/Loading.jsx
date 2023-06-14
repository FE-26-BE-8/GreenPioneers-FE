import React from 'react';
import './Loading.css'; // Import file CSS untuk styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div>
        <div className="loading-spinner"></div>
        </div>
      <div className='loading-text'>
      <h3>Sedang Memuat Data Mohon Tunggu Sebentar...</h3>
      </div>
    </div>
  );
};

export default Loading;
