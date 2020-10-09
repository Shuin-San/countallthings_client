import React, { useState, useEffect } from 'react';
import {Button, ButtonGroup, Typography, CssBaseline, Grid} from '@material-ui/core'
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import theme from './theme/theme'
import io from "socket.io-client";

// Components
import Controls from './components/Controls'
import Counter from './components/Counter'

const ENDPOINT = "https://clickerserversgr.herokuapp.com/";


function App() {

  const [counter, setCounter] = useState({counter: Number});
  const socket = io(ENDPOINT);
  useEffect(() => {
    socket.emit("getCounter");
    socket.on("counter", data => {
      setCounter(data);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  useEffect(() => {
    console.log(counter)
  }, [counter]);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container alignContent={"center"} justify={"center"}>
          <Grid item justify={"center"}>
              <Counter currentNumber={counter.counter}/>
          </Grid>
          <Grid item>
              <Controls socket={socket}/>
          </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
