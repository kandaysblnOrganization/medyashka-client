import React, {FC, useEffect, useState} from 'react';
import {
    Box,
    Container,
    Typography
} from "@mui/material";
import {
    QuizGame as QuizGameComponent
} from './components';
import {
    createUseStyles
} from "react-jss";
import {
    IGameCard
} from "../../../types/ContantsTypes";
import {
    useParams
} from "react-router-dom";
import {
    gamesCards
} from "../../../constants/gamesCards";

interface GameProps {
}

type UserAnswers = {
    [key: string]: any;
};

const Game: FC<GameProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    const {
        label
    } = useParams();
    const [userAnswers, setUserAnswers] = useState<UserAnswers>();
    const [game, setGame] = useState<IGameCard | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getGame();
        })();
    }, []);

    const getGame = async () => {
        await setIsLoading(true);
        const currentGame = gamesCards.filter(gameCard => gameCard.label === label)[0];
        await setGame(currentGame);
        await setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        const newAnswers = {...userAnswers};
        newAnswers![name] = value;

        setUserAnswers(newAnswers);
    };

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                {!isLoading && (
                    <QuizGameComponent
                        game={game!}
                        userAnswers={userAnswers || ""}

                        onChange={handleChange}
                    />
                )}
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