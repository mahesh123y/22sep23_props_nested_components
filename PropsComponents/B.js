import React from 'react'
import C from './C'

export default function B(p) {
    console.log(p);
  return (
    <div>
      <h1>B Component {p.name}</h1>
      <C name="Mahesh" />
    </div>
  );
}
