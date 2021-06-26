import { useState } from "react";
import CellComponent from "./cell";

function Cell({ row, col, height, width, focus, onGetFocus }) {
  console.log("init status focus ", focus, "for row", row, "col", col);
  const [dimensions, setDimensions] = useState({
    width,
    height,
  });
  const [status, setStatus] = useState({
    focus,
    row,
    col,
    value: "",
  });
  console.log("status", status);
  function renderInner(status) {
    console.log(
      "rendering status focus ",
      status.focus,
      "for row",
      status.row,
      "col",
      status.col
    );
    if (status.focus) {
      return (
        <textarea autoFocus style={dimensions} className="cell"></textarea>
      );
    } else {
      return "";
    }
  }
  function handleClick() {
    setStatus({ focus: !status.focus });
    //status.focus = !status.focus;
    onGetFocus(status.row, status.col);
  }

  return (
    <CellComponent
      dimensions={dimensions}
      status={status}
      handleClick={handleClick}
      renderInner={renderInner}
    />
  );
}

export default Cell;
