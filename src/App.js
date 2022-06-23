import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Box from "./components/Box";
import ResetButton from "./components/ResetButton";
import GameError from "./components/GameError";
import GameWin from "./components/GameWin";
import RestartGame from "./components/RestartGame";
const App = () => {
  let initialValue = [
    { id: "box1", value: "" },
    { id: "box2", value: "" },
    { id: "box3", value: "" },
    { id: "box4", value: "" },
    { id: "box5", value: "" },
    { id: "box6", value: "" },
    { id: "box7", value: "" },
    { id: "box8", value: "" },
  ];
  const [boxArray, setBoxArray] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentBox, setCurrentBox] = useState("");
  // const handleClearBox = () => {
  //   setBoxArray(initialValue);
  // };
  const resetBox = () => {
    setBoxArray(initialValue);
    setCurrentBox("");
  };

  // console.log(boxArray[1]?.value, "er");

  return (
    <>
      <div className="mainboard" id="mainBoard">
        <ResetButton
          setBoxArray={setBoxArray}
          initialValue={initialValue}
          setCurrentBox={setCurrentBox}
          resetBox={resetBox}
        />
        <div className="celltop">
          <Box
            id="cellOne"
            inputId="box1"
            className="cell-1"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
          <Box
            id="cellTwo"
            inputId="box2"
            className="cell-2"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
        </div>
        <div className="cellmid">
          <Box
            id="cellThree"
            inputId="box3"
            className="cell-3"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
          <Box
            id="cellFour"
            inputId="box4"
            className="cell-4"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
          <Box
            id="cellFive"
            inputId="box5"
            className="cell-5"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
          <Box
            id="cellSix"
            inputId="box6"
            className="cell-6"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
        </div>
        <div className="cellbottom">
          <Box
            id="cellSeven"
            inputId="box7"
            className="cell-7"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
          <Box
            id="cellEight"
            inputId="box8"
            className="cell-8"
            boxArray={boxArray}
            setBoxArray={setBoxArray}
            setShow={setShow}
            setCurrentBox={setCurrentBox}
            currentBox={currentBox}
            setShowError={setShowError}
          />
        </div>
        <RestartGame boxArray={boxArray} />
        <GameError
          showError={showError}
          setShowError={setShowError}
          resetBox={resetBox}
        />
        <GameWin show={show} setShow={setShow} resetBox={resetBox} />
      </div>
    </>
  );
};

export default App;
