import React from 'react'
import N from './N';

const M = (p) => {
  return (
    <div>
      <h1>M Component {p.name}</h1>
      <N name="Abhishek" />
    </div>
  );
}

export default M
