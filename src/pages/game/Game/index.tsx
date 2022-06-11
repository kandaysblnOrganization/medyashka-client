import React, {FC} from 'react';
import {Box, Container} from "@mui/material";
import {createUseStyles} from "react-jss";

interface GameProps {
}

const Game: FC<GameProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                ИГРА
            </Container>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        minWidth: 0,
        position: "absolute",
        zIndex: 999,
        display: "flex",
        alignItems: 'center',
        top: "50%",
        transform: "translate(0, -50%)",
    },
})

export default Game;