import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {motion} from 'framer-motion'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexGrow : 1,
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

function Counter(props) {
    const {currentNumber} = props;
    const classes = useStyles();

    return (
    <>
        <Grid container alignItems={'center'} justify="center" direction="column">
            <Grid item>
                <Typography variant='body1' color="secondary" style={{margin: "auto"}}>
                    This is a demo of a react app using webSocket to enable real-time interactions between a node js server and this app.
                    You can open this app on various devices and see the counter getting updated across all platforms.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={"h1"} component={"h1"} style={{margin: "auto"}}>
                    <motion.div
                        initial={{opacity : 0}}
                        animate={{opacity : 1}}
                        transition={{ duration: 2}}
                    >
                        {currentNumber}
                    </motion.div>
                </Typography>
            </Grid>
        </Grid>
    </>
    );
}

export default Counter;
