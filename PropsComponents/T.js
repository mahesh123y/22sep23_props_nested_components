import React from 'react'
import U from './U';

const T = (p) => {
  return (
    <div>
      <h1>T Component {p.name}</h1>
      <U name="Manish" />
    </div>
  );
}

export default T
