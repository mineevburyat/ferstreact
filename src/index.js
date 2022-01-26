import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
