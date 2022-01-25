import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Message text = {"Хелло ворлд!"} />
  </React.StrictMode>,
  document.getElementById("root")
);
