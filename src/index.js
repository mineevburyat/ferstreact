import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Message extends React.Component {
  
  render () {
    let {text} = this.props;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
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
