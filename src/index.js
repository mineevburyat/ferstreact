import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Layout, Header, ChatList, MessageList } from "./components";
import "./global.css";
import "./palette.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        header={<Header />}
        chats={<ChatList />}
        messages={<MessageList />}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
