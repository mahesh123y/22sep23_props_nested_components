import React from 'react'
import X from './X';

export default function W(p) {
  return (
    <div>
      <h1>W Component {p.name}</h1>
      <X name="Arun" />
    </div>
  );
}
