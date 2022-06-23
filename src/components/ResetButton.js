import React from "react";

function ResetButton({ resetBox }) {
  const dhrf = () => {};

  return (
    <div>
      <button onClick={resetBox} className="resetButton" id="reset">
        RESET
      </button>
    </div>
  );
}

export default ResetButton;
