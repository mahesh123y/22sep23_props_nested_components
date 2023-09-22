import React from 'react'
import B from "./B"

const Apple = (p) => {
  return (
    <div>
    <>
        <h1>
          Apple component {p.name} {p.msg}
        </h1>
        <B name="Mayank" />
      </>
    </div>
  );
}

export default Apple
