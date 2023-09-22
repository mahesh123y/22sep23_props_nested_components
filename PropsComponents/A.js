import React from "react";
import B from "./B";


export default function A(p) {
  console.log(p);
  return (
    <div>
      <h1>
        A component {p.name} {p.msg}
      </h1>
      <B name="Mayank" />
    </div>
  );
}
