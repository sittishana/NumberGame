import React, { useState } from "react";

function GameWin({ show, setShow, resetBox }) {
  return (
    <>
      <div className={`game-win ${show ? "game-win show" : ""}`} id="gameWin">
        You win!
        <button
          onClick={() => {
            setShow(false);
            resetBox();
          }}
          id="winButton"
        >
          Play Again
        </button>
      </div>
    </>
  );
}

export default GameWin;
