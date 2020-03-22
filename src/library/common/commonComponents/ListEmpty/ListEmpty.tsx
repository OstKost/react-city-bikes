import React from 'react';

const ListEmpty = ({ message = 'Nothing there...' }: { message?: string }) => {
  return <h3 style={{ fontSize: 20, textAlign: 'center' }}>{message}</h3>;
};

export default ListEmpty;
