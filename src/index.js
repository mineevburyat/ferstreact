import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ComponentWithoutJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "NoJSX component")
  );
};

class ClassComponent extends React.Component {
  render() {
    console.log(this.props);
    const { ageold, films } = this.props;
    return (
      <div>
        <h2>Hello class companent</h2>
        {/* <p>{this.props} если раскомментировать то страница пустая, в консоле ошибка </p> */}
        <p>
          <span>Возраст: </span>
          <i>{ageold}</i>
        </p>
        <p>Список фильмов:</p>
        <ul>
          {films.map((film) => {
            return <li>{film}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function FunctionComponent({ ageold, films }) {
  return (
    <div>
      <h2>Hello function component</h2>
      <p>
        <span>Возраст: </span>
        <i>{ageold}</i>
      </p>
      <p>Список фильмов:</p>
      <ul>
        <li>{films[0]}</li>
        <li>{films[1]}</li>
      </ul>
    </div>
  );
}

const Parent = () => {
  const age = 100;
  const listFilms = ["film1", "film2"];
  return (
    <div>
      <h1>Parent block</h1>
      <ClassComponent ageold={age} films={listFilms} />
      <FunctionComponent ageold={age} films={listFilms} />
      <ComponentWithoutJSX />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <h1>Second app</h1>
  </React.StrictMode>,
  document.getElementById("secondroot")
);
