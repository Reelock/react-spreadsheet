import Cell from "../cell";
import { useState } from "react";
function Grid() {
  const defCol = {
    col: 0,
    width: 100,
    value: "",
    focus: false,
  };
  const [rows, setRows] = useState([
    {
      row: 0,
      cols: [defCol, { ...defCol, col: 1 }, { ...defCol, col: 2 }],
      height: 50,
    },
    {
      row: 1,
      cols: [defCol, { ...defCol, col: 1 }, { ...defCol, col: 2 }],
      height: 50,
    },
  ]);
  const focusCell = { row: 0, col: 0 };
  const setFocus = ({ row, col }) => {
    setRows(
      rows.map((rowItem) => {
        rowItem.cols.map((colItem) => {
          if (rowItem.row === focusCell.row && colItem.col === focusCell.col) {
            return { ...colItem, focus: false };
          } else if (rowItem.row === row && colItem.col === col) {
            return { ...colItem, focus: true };
          } else {
            return { ...colItem };
          }
        });
        return { ...rowItem };
      })
    );
  };
  const handleFocusChange = (row, col) => {
    if (focusCell.row !== row || focusCell.col !== col) {
      focusCell.row = row;
      focusCell.col = col;
      setFocus({ row: focusCell.row, col: focusCell.col, focus: true });
    }
  };
  const addColumn = () => {
    setRows(
      rows.map((rowItem) => {
        const lastId = rowItem.cols[rowItem.cols.length - 1].col;
        rowItem.cols = [...rowItem.cols, { ...defCol, col: lastId + 1 }];
        return { ...rowItem };
      })
    );
  };
  return (
    <div>
      {rows.map(({ row, cols, height }) => {
        return (
          <div style={{ height }} key={row}>
            {cols.map(({ col, width, focus }) => {
              return (
                <Cell
                  row={row}
                  col={col}
                  height={height}
                  width={width}
                  focus={focus}
                  onGetFocus={handleFocusChange}
                  key={row + "_" + col}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
