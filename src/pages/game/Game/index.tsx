import React, {FC} from 'react';
import {Container} from "@mui/material";

interface GameProps {
}

const Game: FC<GameProps> = (props) => {
    const {} = props;
    return (
        <Container maxWidth="xl">
            ИГРА
        </Container>
    );
};

export default Game;