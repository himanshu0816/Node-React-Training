import React from "react";
import "./App.css"


function App(props) {
  return (
    <div className="container">
      <div className="box">
        <img src={props.image} alt="pitcha" />
        
        <h5>
          <b />
          {props.head}
        </h5>
        <p>{props.description}</p>
        <a href={props.link}>
          <b />
          Read Full Story...
        </a>
      </div>
    </div>
  );
}

export default App;
