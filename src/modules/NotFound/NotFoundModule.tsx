import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundModule = () => {
  const { goBack } = useHistory();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 error</h1>
      <h2>Page not found</h2>
      <button
        type='button'
        onClick={goBack}
        style={{
          fontSize: 20,
          padding: 15,
          background: 'gray',
          borderRadius: 15
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFoundModule;
