import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <p><span>{props.author}</span>:  {props.text}</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList: [{"author":"nameuser", "text": "message 1"}],
      valueInput: "",
    }
  }
  addMessageOnChat = (text) => {
    const {messageList} = this.state;
    const newMessageList = [...messageList, {"author": 'username', text: this.state.valueInput}];
    this.setState({messageList: newMessageList});
    this.setState({valueInput: ""})
  }
  inputtext = (event) => {
    // console.log(event.target.value);
    // console.log(this.state);
    // let {valueInput} = this.state;
    // console.log(valueInput);
    // valueInput = valueInput + event.target.input;
    // console.log(valueInput);
    // console.log(newstr);
    this.setState({valueInput: event.target.value})
  }
  render() {
    const {messageList} = this.state;
    const {valueInput} = this.state;
    return (
      <div>
      {messageList.map((message) => {
        return (<Message author={message.author} text={message.text}/>)})}
      <input onChange={this.inputtext} type="text" placeholder="enter a text..." value={valueInput}></input>
      <button onClick={(event) => {this.addMessageOnChat()}}>test</button>
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
