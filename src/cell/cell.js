import "./cell.css";
function Cell({ dimensions, status, renderInner, handleClick }) {
  console.log("dimensions", dimensions);
  return (
    <div
      style={{ height: dimensions.height, width: dimensions.width }}
      className="cell"
      onClick={handleClick}
    >
      {renderInner(status)}
    </div>
  );
}

export default Cell;
