import React from 'react'
import Z from './Z';

export default function Y(p) {
  return (
    <div>
      <h1>Y Component {p.name}</h1>
      <Z name="Anil" msg="Oklabs" />
    </div>
  );
}
