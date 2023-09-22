import React from 'react'
import Q from './Q';

const P = (p) => {
  return (
    <div>
      <h1>P Component {p.name}</h1>
      <Q name="Dinanath" />
    </div>
  );
}

export default P
