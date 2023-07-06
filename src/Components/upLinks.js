import React from "react";
import "./upLinks.css";

const Uplinks = (props) => {
  return (
    <div className="pointWrapper">
      <span>
        {props.type === "ring" ? "Точки включения:" : "Точка включения:"}
      </span>
      <div className="edgePointWrapper">
        <input
          name="upLinkOne"
          onChange={props.inputChange}
          className="edgePoint"
        ></input>
        <div className="portsList">
          {/* <input
            name="portNumberFirst"
            onChange={props.inputChange}
            value="9"
            type="radio"
            id="linkFirst9"
          ></input>
          <label htmlFor="linkFirst9">9</label>
          <input
            name="portNumberFirst"
            onChange={props.inputChange}
            value="10"
            type="radio"
            id="linkFirst10"
          ></input>
          <label htmlFor="linkFirst10">10</label>
          <input
            name="portNumberFirst"
            onChange={props.inputChange}
            value="25"
            type="radio"
            id="linkFirst25"
          ></input>
          <label htmlFor="linkFirst25">25</label>
          <input
            name="portNumberFirst"
            onChange={props.inputChange}
            value="26"
            type="radio"
            id="linkFirst26"
          ></input>
          <label htmlFor="linkFirst26">26</label> */}
          {/* <input min={9} max={28} list="tickmarks" className = 'upLink' type="range"  name="portNumberFirst" onChange={props.inputChange}/> */}
          <select name="portNumberFirst" className="selectPort" onChange={props.inputChange}>
            <option>9</option>
            <option>10</option>
            <option>17</option>
            <option>18</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
          </select>
        </div>
      </div>
      <div
        className="edgePointWrapper"
        style={{ display: props.type === "tree" ? "none" : "flex" }}
      >
        <input
          name="upLinkTwo"
          onChange={props.inputChange}
          className="edgePoint"
        ></input>
        <div className="portsList">
          {/* <input
            name="portNumberSecond"
            onChange={props.inputChange}
            value="9"
            type="radio"
            id="linkSecond9"
          ></input>
          <label htmlFor="linkSecond9">9</label>
          <input
            name="portNumberSecond"
            onChange={props.inputChange}
            value="10"
            type="radio"
            id="linkSecond10"
          ></input>
          <label htmlFor="linkSecond10">10</label>
          <input
            name="portNumberSecond"
            onChange={props.inputChange}
            value="25"
            type="radio"
            id="linkSecond25"
          ></input>
          <label htmlFor="linkSecond25">25</label>
          <input
            name="portNumberSecond"
            onChange={props.inputChange}
            value="26"
            type="radio"
            id="linkSecond26"
          ></input>
          <label htmlFor="linkSecond26">26</label> */}
          <select name="portNumberSecond" className="selectPort" onChange={props.inputChange}>
            <option>9</option>
            <option>10</option>
            <option>17</option>
            <option>18</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Uplinks;
