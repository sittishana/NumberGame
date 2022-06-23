const data = [
  { id: "box1", value: "" },
  { id: "box2", value: "" },
  { id: "box3", value: "" },
  { id: "box4", value: "" },
  { id: "box5", value: "" },
  { id: "box6", value: "" },
  { id: "box7", value: "" },
  { id: "box8", value: "" },
];
var bx1 = "";
var bx2 = "";
var bx3 = "";
var bx4 = "";
var bx5 = "";
var bx6 = "";
var bx7 = "";
var bx8 = "";

const youWin = (setShow) => {
  if (
    bx1 !== "" &&
    bx2 !== "" &&
    bx3 !== "" &&
    bx4 !== "" &&
    bx5 !== "" &&
    bx6 !== "" &&
    bx7 !== "" &&
    bx8 !== ""
  ) {
    setShow(true);
  }
};
const resetGame = () => {
  bx1 = "";
  bx2 = "";
  bx3 = "";
  bx4 = "";
  bx5 = "";
  bx6 = "";
  bx7 = "";
  bx8 = "";
};
const checkError = (setShowError) => {
  setShowError(true);
};

const checkCorners = (boxId1, boxId2) => {
  return boxId1 === boxId2 || boxId1 === boxId2 + 1 || boxId1 === boxId2 - 1;
};
const checkEqualInput = (boxId1, boxId2, boxId3, mainBox) => {
  return boxId1 === mainBox || boxId2 === mainBox || boxId3 === mainBox;
};
// const handleSetCurrentBox = (id) => {
//   setCurrentBox(id);
// };
const BoxCheck = (
  { id, value },
  setShow,
  setCurrentBox,
  currentBox,
  setShowError
) => {
  data.map((item) => {
    if (item.id === id) {
      return (item.value = value);
    }
  });
  // const handleSetCurrentBox = () => {
  //   setCurrentBox(id);
  //   console.log("yes");
  // };
  data.map((cor) => {
    if (cor.id === "box1") {
      bx1 = cor.value;
    }
    if (cor.id === "box2") {
      bx2 = cor.value;
    }
    if (cor.id === "box3") {
      bx3 = cor.value;
    }
    if (cor.id === "box4") {
      bx4 = cor.value;
    }
    if (cor.id === "box5") {
      bx5 = cor.value;
    }
    if (cor.id === "box6") {
      bx6 = cor.value;
    }
    if (cor.id === "box7") {
      bx7 = cor.value;
    }
    if (cor.id === "box8") {
      bx8 = cor.value;
    }
  });
  console.log(setCurrentBox, id);
  //BOX1
  if (checkCorners(parseInt(bx2), parseInt(bx1))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx3), parseInt(bx1))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx4), parseInt(bx1))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx1))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(parseInt(bx6), parseInt(bx7), parseInt(bx8), parseInt(bx1))
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX2
  if (checkCorners(parseInt(bx1), parseInt(bx2))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx4), parseInt(bx2))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx2))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx6), parseInt(bx2))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(parseInt(bx3), parseInt(bx7), parseInt(bx8), parseInt(bx2))
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX3
  if (checkCorners(parseInt(bx1), parseInt(bx3))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx4), parseInt(bx3))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx7), parseInt(bx3))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(
      parseInt(bx2),
      parseInt(bx5),
      parseInt(bx6),
      parseInt(bx3)
    ) ||
    parseInt(bx8) === parseInt(bx3)
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX4
  if (checkCorners(parseInt(bx1), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx2), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx3), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx7), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx8), parseInt(bx4))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (parseInt(bx6) === parseInt(bx4)) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX5
  if (checkCorners(parseInt(bx1), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx2), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx4), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx6), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx7), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx8), parseInt(bx5))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (parseInt(bx3) === parseInt(bx5)) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX 6
  if (checkCorners(parseInt(bx2), parseInt(bx6))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx6))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx8), parseInt(bx6))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(
      parseInt(bx1),
      parseInt(bx3),
      parseInt(bx4),
      parseInt(bx6)
    ) ||
    parseInt(bx3) === parseInt(bx6)
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX7
  if (checkCorners(parseInt(bx3), parseInt(bx7))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx4), parseInt(bx7))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx7))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx8), parseInt(bx7))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(parseInt(bx1), parseInt(bx2), parseInt(bx6), parseInt(bx7))
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }

  //BOX8
  if (checkCorners(parseInt(bx4), parseInt(bx8))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx5), parseInt(bx8))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx6), parseInt(bx8))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (checkCorners(parseInt(bx7), parseInt(bx8))) {
    checkError(setShowError);
    setCurrentBox(id);
  } else if (
    checkEqualInput(parseInt(bx1), parseInt(bx2), parseInt(bx3), parseInt(bx8))
  ) {
    checkError(setShowError);
    setCurrentBox(id);
  }
  youWin(setShow);
};
export { BoxCheck, resetGame };
