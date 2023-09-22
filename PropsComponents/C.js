import React from 'react'
import D from './D';

export default function C(p) {
  return (
    <div>
      <h1>C component {p.name}</h1>
      <D name="Sunil"/>
    </div>
  );
}
