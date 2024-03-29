import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = (props) => (
  <div style={boardStyle}>{props.cells.map((c, index) => <Cell onClick={() => props.onClickCell(index)} content={c}/>)}</div>
);

export default Board;
