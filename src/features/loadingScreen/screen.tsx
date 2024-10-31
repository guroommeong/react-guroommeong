import React from 'react';
import LoadingSpinner from '../../component/loadingSpinner/screen';

const LoadingScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingScreen;
