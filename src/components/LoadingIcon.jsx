// src/components/LoadingIcon.jsx
import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingIcon = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" />
    </div>
  );
};

export default LoadingIcon;
