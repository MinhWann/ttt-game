import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square clickValue={squares[0]} handleClick={() => handleClick(0)} />
          <Square clickValue={squares[1]} handleClick={() => handleClick(1)} />
          <Square clickValue={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square clickValue={squares[3]} handleClick={() => handleClick(3)} />
          <Square clickValue={squares[4]} handleClick={() => handleClick(4)} />
          <Square clickValue={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square clickValue={squares[6]} handleClick={() => handleClick(6)} />
          <Square clickValue={squares[7]} handleClick={() => handleClick(7)} />
          <Square clickValue={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}