import React from 'react'
import L from './L';

const K = (p) => {
  return (
    <div>
      <h1>K Component {p.name}</h1>
      <L name="Anuj" />
    </div>
  );
}

export default K
