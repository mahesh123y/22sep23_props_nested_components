import React from 'react'
import G from './G';

export default function F(p) {
  return (
    <div>
      <h1>F Component {p.name}</h1>
      <G name="Vikash" />
    </div>
  );
}
