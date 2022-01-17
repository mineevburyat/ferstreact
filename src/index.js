import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>);
}


ReactDOM.render(
  <React.StrictMode>
    <Message text='balablabla'/>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <h1>Second app</h1>
  </React.StrictMode>,
  document.getElementById("secondroot")
);
