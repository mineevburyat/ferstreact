import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
// matrial ui
// grid layout
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// app bar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//left aside with rooms
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// Input field and send box
import TextField from '@mui/material/TextField';


export function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function BasicList() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Room 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Room 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Room 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [valueInput,setValueInput] = useState('')
  const handleChange = (event) => {
    setValueInput(event.target.value);
  };
  const addMessageOnChat = (username, text) => {
    setMessageList([...messageList, {author: username, text: text}]);
  }
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
    console.log('click')
    addMessageOnChat("username1", valueInput);
    setValueInput('');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ButtonAppBar/>
        </Grid>
        <Grid item xs={4}>
          <BasicList/>
        </Grid>
        <Grid item xs={8}>
          <Box  sx={{ height: '80vh', width: '100%', bgcolor: 'background.paper' }}></Box>
        </Grid>
        <Grid item xs={12}>
          <Box display={"flex"} flexDirection={"row"}>
            <TextField onChange={handleChange} id="inputtext" label="enter text..." variant="standard" autoFocus fullWidth value={valueInput}/>
            <Button onClick={clickButton} variant="contained">send</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
