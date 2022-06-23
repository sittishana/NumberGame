import React from "react";

const youWin = (setShow, per) => {
  if (
    per.bx1.value !== "" &&
    per.bx2.value !== "" &&
    per.bx3.value !== "" &&
    per.bx4.value !== "" &&
    per.bx5.value !== "" &&
    per.bx6.value !== "" &&
    per.bx7.value !== "" &&
    per.bx8.value !== ""
  ) {
    setShow(true);
  }
};

const checkError = (setShowError) => {
  setShowError(true);
};
function BoxCheck2(
  boxArray,
  setShow,
  setShowError,
  { id, value },
  setCurrentBox
) {
  //   const checkCorners = (boxId1, boxId2) => {
  //     return boxId1 === boxId2 || boxId1 === boxId2 + 1 || boxId1 === boxId2 - 1;
  let bx1 = boxArray?.find((ele) => ele.id === "box1");
  let bx2 = boxArray?.find((ele) => ele.id === "box2");
  let bx3 = boxArray?.find((ele) => ele.id === "box3");
  let bx4 = boxArray?.find((ele) => ele.id === "box4");
  let bx5 = boxArray?.find((ele) => ele.id === "box5");
  let bx6 = boxArray?.find((ele) => ele.id === "box6");
  let bx7 = boxArray?.find((ele) => ele.id === "box7");
  let bx8 = boxArray?.find((ele) => ele.id === "box8");

  const per = { bx1, bx2, bx3, bx4, bx5, bx6, bx7, bx8 };
  console.log(per.bx1.value);
  if (boxArray?.length !== 0) {
    if (bx1?.value) {
      if (
        bx1?.value === bx2?.value ||
        bx1?.value === bx2?.value + 1 ||
        bx1?.value === bx2?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx1?.value === bx3?.value ||
        bx1?.value === bx3?.value + 1 ||
        bx1?.value === bx3?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx1?.value === bx4?.value ||
        bx1?.value === bx4?.value + 1 ||
        bx1?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx1?.value === bx5?.value ||
        bx1?.value === bx5?.value + 1 ||
        bx1?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx1?.value === bx6?.value ||
        bx1?.value === bx7?.value ||
        bx1?.value === bx8?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }
    //box2
    if (bx2?.value) {
      if (
        bx2?.value === bx1?.value ||
        bx2?.value === bx1?.value + 1 ||
        bx2?.value === bx1?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx2?.value === bx4?.value ||
        bx2?.value === bx4?.value + 1 ||
        bx2?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx2?.value === bx5?.value ||
        bx2?.value === bx5?.value + 1 ||
        bx2?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx2?.value === bx6?.value ||
        bx2?.value === bx6?.value + 1 ||
        bx2?.value === bx6?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx2?.value === bx3?.value ||
        bx2?.value === bx7?.value ||
        bx2?.value === bx8?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }
    //box3
    if (bx3?.value) {
      if (
        bx3?.value === bx1?.value ||
        bx3?.value === bx1?.value + 1 ||
        bx3?.value === bx1?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx3?.value === bx4?.value ||
        bx3?.value === bx4?.value + 1 ||
        bx3?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx3?.value === bx7?.value ||
        bx3?.value === bx7?.value + 1 ||
        bx3?.value === bx7?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx3?.value === bx2?.value ||
        bx3?.value === bx5?.value ||
        bx3?.value === bx6?.value ||
        bx3?.value === bx8?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }

    //box4
    if (bx4?.value) {
      if (
        bx4?.value === bx1?.value ||
        bx4?.value === bx1?.value + 1 ||
        bx4?.value === bx1?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx4?.value === bx2?.value ||
        bx4?.value === bx2?.value + 1 ||
        bx4?.value === bx2?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx4?.value === bx3?.value ||
        bx4?.value === bx3?.value + 1 ||
        bx4?.value === bx3?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx4?.value === bx5?.value ||
        bx4?.value === bx5?.value + 1 ||
        bx4?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx4?.value === bx7?.value ||
        bx4?.value === bx7?.value + 1 ||
        bx4?.value === bx7?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx4?.value === bx8?.value ||
        bx4?.value === bx8?.value + 1 ||
        bx4?.value === bx8?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (bx4?.value === bx6?.value) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }

    //box5
    if (bx5?.value) {
      if (
        bx5?.value === bx1?.value ||
        bx5?.value === bx1?.value + 1 ||
        bx5?.value === bx1?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx5?.value === bx2?.value ||
        bx5?.value === bx2?.value + 1 ||
        bx5?.value === bx2?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx5?.value === bx4?.value ||
        bx5?.value === bx4?.value + 1 ||
        bx5?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx5?.value === bx6?.value ||
        bx5?.value === bx6?.value + 1 ||
        bx5?.value === bx6?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx5?.value === bx7?.value ||
        bx5?.value === bx7?.value + 1 ||
        bx5?.value === bx7?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx5?.value === bx8?.value ||
        bx5?.value === bx8?.value + 1 ||
        bx5?.value === bx8?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (bx5?.value === bx3?.value) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }

    //box6
    if (bx6?.value) {
      if (
        bx6?.value === bx2?.value ||
        bx6?.value === bx2?.value + 1 ||
        bx6?.value === bx2?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx6?.value === bx5?.value ||
        bx6?.value === bx5?.value + 1 ||
        bx6?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx6?.value === bx8?.value ||
        bx6?.value === bx8?.value + 1 ||
        bx6?.value === bx8?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx6?.value === bx1?.value ||
        bx6?.value === bx3?.value ||
        bx6?.value === bx4?.value ||
        bx6?.value === bx7?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }
    //box7
    if (bx7?.value) {
      if (
        bx7?.value === bx3?.value ||
        bx7?.value === bx3?.value + 1 ||
        bx7?.value === bx3?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx7?.value === bx4?.value ||
        bx7?.value === bx4?.value + 1 ||
        bx7?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx7?.value === bx5?.value ||
        bx7?.value === bx5?.value + 1 ||
        bx7?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx7?.value === bx8?.value ||
        bx7?.value === bx8?.value + 1 ||
        bx7?.value === bx8?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx7?.value === bx1?.value ||
        bx7?.value === bx2?.value ||
        bx7?.value === bx6?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }
    //box8
    if (bx8?.value) {
      if (
        bx8?.value === bx4?.value ||
        bx8?.value === bx4?.value + 1 ||
        bx8?.value === bx4?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx8?.value === bx5?.value ||
        bx8?.value === bx5?.value + 1 ||
        bx8?.value === bx5?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx8?.value === bx6?.value ||
        bx8?.value === bx6?.value + 1 ||
        bx8?.value === bx6?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx8?.value === bx7?.value ||
        bx8?.value === bx7?.value + 1 ||
        bx8?.value === bx7?.value - 1
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      } else if (
        bx8?.value === bx1?.value ||
        bx8?.value === bx2?.value ||
        bx8?.value === bx3?.value
      ) {
        checkError(setShowError);
        setCurrentBox(id);
      }
    }

    youWin(setShow, per);
  }
}

export default BoxCheck2;
