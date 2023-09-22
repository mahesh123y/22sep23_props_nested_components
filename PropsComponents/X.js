import React from 'react'
import Y from './Y';


export default function X(p) {
  return (
    <div>
      <h1>X Component {p.name}</h1>
      <Y name="Naveen" />
    </div>
  );
}
