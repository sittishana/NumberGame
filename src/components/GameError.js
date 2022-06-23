import React from "react";
function GameError({ showError, setShowError, resetBox }) {
  return (
    <>
      <div
        className={`game-message ${showError ? "game-message show" : ""}`}
        id="gameMessage"
      >
        Wrong number
        <button
          onClick={() => {
            setShowError(false);
            resetBox();
            // resetDisplay();
          }}
          id="winButton"
        >
          Play Again
        </button>
      </div>
    </>
  );
}

export default GameError;
