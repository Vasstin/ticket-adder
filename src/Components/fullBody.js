import React from "react";
import "./fullBody.css";

const FullBody = (props) => {
  let ticketBody = props.ticketBody; /*.map(item => <p>item</p>)*/

  return (
    <div className="ticket">
      <span>
        {props.type === "tree" ? "недоступно:" : "недоступны крайние точки:"}
      </span>
      <span>{props.pointOne} </span>
      <p style={{ display: props.type === "tree" ? "none" : "flex" }}>{props.pointTwo} </p>
      <div>{props.type === "tree" ? "за ним:" : "между ними:"}</div>
      {ticketBody.map((item) => (
        <div>{item}</div>
      ))}
      <div>{props.type === "tree" ? "вкл с:" : "вкл между:"}</div>
      <div>
        {props.upLinkOne} порт {props.portNumberFirst}
      </div>
      <div style={{ display: props.type === "tree" ? "none" : "flex" }}>
        {props.upLinkTwo} порт {props.portNumberSecond}
      </div>
      <div>{props.link === "up" ? "линк есть, маков нет" : "линков нет"}</div>
    </div>
  );
};

export default FullBody;
