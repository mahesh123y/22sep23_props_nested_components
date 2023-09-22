import React from 'react'
import W from './W';

export default function V(p) {
  return (
    <div>
      <h1>V Component {p.name}</h1>
      <W name="Ravi" />
    </div>
  );
}
