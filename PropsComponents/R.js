import React from 'react'
import S from './S';

const R = (p) => {
  return (
    <div>
      <h1>R Component {p.name}</h1>
      <S name="Anup" />
    </div>
  );
}

export default R
