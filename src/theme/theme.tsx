import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#cfdbd5"
        },
        secondary: {
            main: "#f5cb5c"
        },
        background: {
            default: "#242423"
        }
    },
    typography: {
        h1: {
            color : '#cfdbd5',
            fontWeight : 700
        },
        body1: {
            fontFamily: "Roboto"
        }
    },
});

export default theme;
