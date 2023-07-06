import React from "react";
import "./edgePoint.css";

const EdgePoint = (props) => {
  return (
    <div className="pointWrapper">
      <span>
        {props.type === "ring" ? "Крайние точки:" : "Недоступная точка:"}
      </span>
      <input
        name="pointOne"
        onChange={props.inputChange}
        className="edgePoint"
      ></input>
      <input
        hidden={props.type === "tree" ? true : false}
        name="pointTwo"
        onChange={props.inputChange}
        className="edgePoint"
      ></input>
    </div>
  );
};

export default EdgePoint;
