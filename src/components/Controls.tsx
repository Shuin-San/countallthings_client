import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";

function Controls(props) {
    const {socket} = props;
    const incrementCounter = (n) => {
        socket.emit("updateCounter", 'increment', n);
        socket.disconnect();
    };

    const decrementCounter = (n) => {
        socket.emit("updateCounter", 'decrement', n);
    };

    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button size="large" color="primary" onClick={()=>decrementCounter(10)}>-10</Button>
            <Button size="large" color="primary" onClick={()=>decrementCounter(5)}>-5</Button>
            <Button size="large" color="primary" onClick={()=>decrementCounter(1)}>-1</Button>
            <Button size="large" color="primary" onClick={()=>incrementCounter(1)}>+1</Button>
            <Button size="large" color="primary" onClick={()=>incrementCounter(5)}>+5</Button>
            <Button size="large" color="primary" onClick={()=>incrementCounter(10)}>+10</Button>
        </ButtonGroup>
    );
}

export default Controls;
