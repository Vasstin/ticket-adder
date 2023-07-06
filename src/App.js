import { useState } from "react";
import FullBody from "./Components/fullBody";
import EdgePoint from "./Components/edgePoint";
import "./App.css";
import UpLinks from "./Components/upLinks";

function App() {
  const [formData, setFormData] = useState({});
  const [formBody, setFormBody] = useState([]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function formBodyChange(event) {
    const data = event.target.value;
    
    const strToArray = data.split("\n");
    const newArray = [];
    strToArray.map((item) => {
      if (item.includes('sw') && !item.includes('um')) {
        console.log(item)
        newArray.push(item);
      }
    });
    setFormBody(newArray);
  }
  console.log(formData)
  return (
    <div className="App">
      <form className="form">
        <div className="linkStatus">
          <input
            name="ticketType"
            onChange={(event) => handleChange(event)}
            value="tree"
            type="radio"
            id="tree"
          ></input>
          <label htmlFor="tree">Ветка</label>
          <input
            name="ticketType"
            onChange={(event) => handleChange(event)}
            value="ring"
            type="radio"
            id="ring"
          ></input>
          <label htmlFor="ring">Кольцо</label>
        </div>
        <span>Тело заявки:</span>
        <textarea
          className="ticketBody"
          onChange={(event) => formBodyChange(event)}
        ></textarea>
        <EdgePoint
          type={formData.ticketType}
          inputChange={(event) => handleChange(event)}
        />
        <UpLinks
          type={formData.ticketType}
          inputChange={(event) => handleChange(event)}
        />
        <div className="linkStatus">
          <input
            name="linkStatus"
            onChange={(event) => handleChange(event)}
            value="up"
            type="radio"
            id="up"
          ></input>
          <label htmlFor="up">up</label>
          <input
            name="linkStatus"
            onChange={(event) => handleChange(event)}
            value="down"
            type="radio"
            id="down"
          ></input>
          <label htmlFor="down">down</label>
        </div>
      </form>
      <FullBody
        pointOne={formData.pointOne}
        pointTwo={formData.pointTwo}
        upLinkOne={formData.upLinkOne}
        upLinkTwo={formData.upLinkTwo}
        portNumberFirst={formData.portNumberFirst}
        portNumberSecond={formData.portNumberSecond}
        link={formData.linkStatus}
        ticketBody={formBody}
        type={formData.ticketType}
      />
    </div>
  );
}

export default App;
