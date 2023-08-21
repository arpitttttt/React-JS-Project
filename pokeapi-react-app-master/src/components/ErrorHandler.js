import React from 'react';
import './ErrorHandler.scss';

function ErrorHandler({ err }) {
  return (
    <div className="errorHandler">
      {err.toString()}
    </div>
  );
}

export default ErrorHandler;
