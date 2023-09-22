import React from "react";
import B from "./B";
import Z from "./Z";

const Apple = (p) => {
  return (
    <div>
      <>
        <h1>
          Apple component {p.name} {p.msg}
        </h1>
        <B name="Mayank" />
        <Z name="Anil" msg="Oklabs" />
      </>
    </div>
  );
};

export default Apple;
