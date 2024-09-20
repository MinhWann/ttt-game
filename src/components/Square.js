import React from "react";

function Square({ clickValue, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {clickValue}
    </button>
  );
}

export default Square;