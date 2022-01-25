import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <p>{props.text}</p>
  )
}

function App() {
  const [messageList, setMessageList] = useState([{"author":"nameuser", "text": "message 1"}]);
  // setMessageList = () => {}
  return (
    <div>
      {messageList.map((message) => {
        return (<Message text={message.text}/>)})}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
