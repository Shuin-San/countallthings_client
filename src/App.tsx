import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core'
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

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

  const incrementCounter = (n) => {
    socket.emit("updateCounter", 'increment', n);
  };

  const decrementCounter = (n) => {
    socket.emit("updateCounter", 'decrement', n);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          {counter.counter}
        <Button onClick={()=>incrementCounter(1)}>+1</Button>
        <Button onClick={()=>decrementCounter(1)}>-1</Button>
      </header>
    </div>
  );
}

export default App;
