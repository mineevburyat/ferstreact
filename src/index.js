import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <p>{props.text}</p>
  )
}

function App(props) {
  return (
    <div>
      <Message text={props.text} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App text="hello world!" />
  </React.StrictMode>,
  document.getElementById("root")
);
