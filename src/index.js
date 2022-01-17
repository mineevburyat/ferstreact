import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <p>{props.text}</p>
    );
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
    <App text='props from App component'/>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <h1>Second app</h1>
  </React.StrictMode>,
  document.getElementById("secondroot")
);
