import React, { useState } from "react";
import { BoxCheck } from "./BoxCheck";
import BoxCheck2 from "./BoxCheck2";
function Box({
  id,
  inputId,
  boxArray,
  className,
  setBoxArray,
  setShow,
  setCurrentBox,
  currentBox,
  setShowError,
}) {
  // const [value, setValue] = useState("");
  const addBoxValue = (value, e) => {
    try {
      setBoxArray((prevBoxArray) => {
        // BoxCheck(value, setShow, setCurrentBox, currentBox, setShowError);

        let boxFind = prevBoxArray.find((test) => test.id === value.id);
        if (boxFind) {
          const array = prevBoxArray.map((box) => {
            if (box.id === value.id) {
              return { ...box, value: value.value };
            }
            return box;
          });

          // console.log(array);
          BoxCheck2(array, setShow, setShowError, value, setCurrentBox);
          return array;
        } else {
          BoxCheck2(
            [...prevBoxArray, value],
            setShow,
            setShowError,
            value,
            setCurrentBox
          );
          return [...prevBoxArray, value];
        }
      });
      console.log();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetCurrentBox = () => {
    setCurrentBox(id);
  };

  let boxData = boxArray.find((c) => c.id === inputId);
  // let fdofr = boxArray?.find((ele) => ele.id === id);
  return (
    <>
      <div
        className={`${className} ${currentBox === inputId && "error"}`}
        id={id}
        data-cell
      >
        <input
          onChange={(e) => {
            // setValue(e.target.value);
            addBoxValue({ id: inputId, value: parseInt(e.target.value) });
            setBoxArray((prev) => {
              let newBoxArray = prev.map((c) => {
                if (c.id === inputId) {
                  return { ...c, value: parseInt(e.target.value) };
                }

                return c;
              });
              return newBoxArray;
            });
          }}
          id={inputId}
          type="number"
          min="1"
          max="8"
          maxLength="1"
          value={boxData.value}
        />
      </div>
    </>
  );
}

export default Box;
