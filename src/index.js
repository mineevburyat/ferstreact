import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <p>{props.text}</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList: [{"author":"nameuser", "text": "message 1"}],
    }
  }
  test = (text) => {
    console.log("click", text);
    const {messageList} = this.state;
    const newMessageList = [...messageList, {"author": 'username', text: 'new message'}]
    console.log(newMessageList);
    this.setState({messageList: newMessageList})
  }
  render() {
    const {messageList} = this.state;
    return (
      <div>
      {messageList.map((message) => {
        return (<Message text={message.text}/>)})}
        <button onClick={(event) => {this.test("event4554")}}>test</button>
    </div>
    )
  }
}

// function App() {
//   const [messageList, setMessageList] = useState([{"author":"nameuser", "text": "message 1"}]);
//   // setMessageList = () => {}
//   return (
//     <div>
//       {messageList.map((message) => {
//         return (<Message text={message.text}/>)})}
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
