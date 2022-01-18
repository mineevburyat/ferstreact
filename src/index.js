import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function HeaderPage() {
  return (
    <h1>Hello ReactJS!</h1>
  )
}

function Message({text}) {
  return (
    <p>{text}</p>
    );
}

function ListRender({list}) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li>{item}</li>
        )
      })}
    </ul>
  )
}
// Почему обработчик только стрелочная функция? С обычной функцией не сработало
const handelClick = () => {
  console.log("click on element");
}

function App({title, today, handel}) {
  return (
    <div>
      <HeaderPage />
      <div>
        <h2 onClick={handel}>Lesson 1</h2>
        <Message text={text} />
        <ListRender list={today} />
      </div>
      
    </div>
  )
}

let text = "Introduction to React JS";
const knownToday = ["babel", "webpack", "JSX", "clean function", "react component", "props"]
ReactDOM.render(
  <React.StrictMode>
    <App titlet={text} today = {knownToday} handel = {handelClick}/>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <h1>Second app</h1>
  </React.StrictMode>,
  document.getElementById("secondroot")
);
