import React from 'react'
import T from './T';

const S = (p) => {
  return (
    <div>
      <h1>S Component {p.name}</h1>
      <T name="Yash" />
    </div>
  );
}

export default S
