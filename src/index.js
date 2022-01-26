import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from 'prop-types'

function Message(props) {
  const {author, text} = props.message;
  return (
    <p><span>{author}</span>:  {text}</p>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.timeID = undefined;
//     this.state = {
//       messageList: [],
//       valueInput: "",
//     }
//   }
  // clickButton = (event) => {
  //   console.log("click", event)
  //   this.addMessageOnChat("username1", this.state.valueInput)
  //   this.setState({valueInput: ""})
  // }

  // addMessageOnChat = (username, text) => {
  //   const {messageList} = this.state;
  //   const newMessageList = [...messageList, {author: username, text: text}];
  //   this.setState({messageList: newMessageList});
  // }

  // inputtext = (event) => {
  //   // console.log(event.target.value);
  //   // console.log(this.state);
  //   // let {valueInput} = this.state;
  //   // console.log(valueInput);
  //   // valueInput = valueInput + event.target.input;
  //   // console.log(valueInput);
  //   // console.log(newstr);
  //   this.setState({valueInput: event.target.value})
  // }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     const {messageList} = this.state;
//     // console.log("вызвался дидапдейт", messageList.length, prevState.messageList.length);
//     if (messageList.length !== prevState.messageList.length) {
//       console.log("изменилось состояние messagelist")
      // let lastIndex = messageList.length - 1;
      // if (messageList[lastIndex].author !== 'Bot') {
      //   console.log("сообщение не от бота")
      //   if (this.timeID !== undefined) {clearTimeout(this.timeID)};
      //   this.timeID = setTimeout(this.addMessageOnChat, 2000, 'Bot', 'Hello! I am bot! Can I help you?')
      //   // this.addMessageOnChat('Bot', "Hello! I am bot! Can I help you?")
//       }
      
//     }
    
//   }

//   render() {
//     const {messageList} = this.state;
//     const {valueInput} = this.state;
//     return (
//       <div>
//       {messageList.map((message) => {
//         return (<Message author={message.author} text={message.text}/>)})}
//       <input onChange={this.inputtext} type="text" placeholder="enter a text..." value={valueInput}></input>
//       <button onClick={this.clickButton}>send</button>
//     </div>
//     )
//   }
// }

function App() {
  const [messageList, setMessageList] = useState([]);
  const [valueInput,setValueInput] = useState('')
 
  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerID = undefined;
    // console.log(lastMessage);
    if (lastMessage !== undefined) {
      if (lastMessage.author !== 'Bot') {
      timerID = setTimeout(addMessageOnChat, 2000, 'Bot', 'Hello! I am bot! Can I help you?');

      }
    }
    //разобраться с этой Магией
    return () => clearTimeout(timerID)
    }, [messageList]);//зачем требует объявить в списке еще addmessageOnChat

  const inputtext = (event) => {
    setValueInput(event.target.value)
  }
  
  const clickButton = (event) => {
    addMessageOnChat("username1", valueInput);
    setValueInput('');
  }
  
  const addMessageOnChat = (username, text) => {
    setMessageList([...messageList, {author: username, text: text}]);
  }

  return (
    <div>
     {messageList.map((message) => {
         return (<Message message={message}/>)})}
       <input onChange={inputtext} type="text" placeholder="enter a text..." value={valueInput}></input>
       <button onClick={clickButton}>send</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
