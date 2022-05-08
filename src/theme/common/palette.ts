const {colors} = require('@mui/material');

const white = '#FFFFFF';
const black = '#000000';

const main = '#FFB800';
const mainHover = '#F5B000';

const secondary = '#FB8349';
const secondaryHover = '#FFB800';

export default {
    black,
    white,

    primary: {
        contrastText: white,
        main: main,
        light: "#FFB800",
        dark: mainHover,
    },
    secondary: {
        contrastText: white,
        main: secondary,
        dark: mainHover
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400]
    },
    info: {
        contrastText: white,
        dark: colors.yellow[900],
        main: colors.yellow[600],
        light: colors.yellow[400]
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: black,
        secondary: white,
        link: colors.blue[600],
    },
    background: {
        default: '#F2EFEE',
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
    gray: {
        default: '#8698B1',
        light: '#C2CFE0',
        veryLight: '#F3F5F9',
        dark: '#647083'
    }
};
