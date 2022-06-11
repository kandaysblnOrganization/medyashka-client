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
        position: "relative",
        zIndex: 999,
        display: "flex",
        alignItems: 'center',
        height: "100vh",
    },
})

export default Game;