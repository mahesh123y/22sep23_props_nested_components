import React from 'react'
import H from './H';

export default function G(p) {
  return (
    <div>
      <h1>G Component {p.name}</h1>
      <H name="Vishal" />
    </div>
  );
}
