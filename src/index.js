import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css"

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
      <div className={styles.cardlesson}>
        <h2 onClick={handel} className="textCenter">Lesson 1 &dArr;</h2>
        <hr/>
        <Message text={text} />
        <div className={styles.visiotoggle}>
          <ListRender list={today} />
        </div>
      </div>
      
    </div>
  )
}

let text = "Introduction to React JS";
const knownToday = ["babel", "webpack", "JSX", "clean function", "react component", "props", "imperative and declorative programming", "react styles and modul styles", "react events"]
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
