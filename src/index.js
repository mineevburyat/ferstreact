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
    super(props);
    this.timeID = undefined;
    this.state = {
      messageList: [],
      valueInput: "",
    }
  }
  clickButton = (event) => {
    console.log("click", event)
    this.addMessageOnChat("username1", this.state.valueInput)
    this.setState({valueInput: ""})
  }

  addMessageOnChat = (username, text) => {
    const {messageList} = this.state;
    const newMessageList = [...messageList, {author: username, text: text}];
    this.setState({messageList: newMessageList});
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {messageList} = this.state;
    // console.log("вызвался дидапдейт", messageList.length, prevState.messageList.length);
    if (messageList.length !== prevState.messageList.length) {
      console.log("изменилось состояние messagelist")
      let lastIndex = messageList.length - 1;
      if (messageList[lastIndex].author !== 'Bot') {
        console.log("сообщение не от бота")
        if (this.timeID !== undefined) {clearTimeout(this.timeID)};
        this.timeID = setTimeout(this.addMessageOnChat, 2000, 'Bot', 'Hello! I am bot! Can I help you?')
        // this.addMessageOnChat('Bot', "Hello! I am bot! Can I help you?")
      }
      
    }
    
  }

  render() {
    const {messageList} = this.state;
    const {valueInput} = this.state;
    return (
      <div>
      {messageList.map((message) => {
        return (<Message author={message.author} text={message.text}/>)})}
      <input onChange={this.inputtext} type="text" placeholder="enter a text..." value={valueInput}></input>
      <button onClick={this.clickButton}>send</button>
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
