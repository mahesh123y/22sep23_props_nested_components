import React from 'react'
import I from './I';

export default function H(p) {
  return (
    <div>
      <h1>H Component {p.name}</h1>
      <I name="Sandeep" />
    </div>
  );
}
