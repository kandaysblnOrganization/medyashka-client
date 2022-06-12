import React, {FC, useEffect, useState} from 'react';
import {
    Box,
    Container,
    Typography
} from "@mui/material";
import {
    MainGame as MainGameComponent
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
    const [renderAnswers, setRenderAnswers] = useState(true);
    const [renderResults, setRenderResults] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getGame();
        })();
    }, []);

    useEffect(() => {
        changeShowCheck();
    }, [userAnswers]);

    const getGame = async () => {
        await setIsLoading(true);
        const currentGame = gamesCards.filter(gameCard => gameCard.label === label)[0];
        await setGame(currentGame);
        await setIsLoading(false);
    };

    const getResults = () => {
        if (userAnswers !== undefined) {
            const questionsLength = game?.questions.length || 1;
            const keys = Object.keys(userAnswers);
            const currentAnswersLength = keys.length;
            let count = 0;
            if (questionsLength === currentAnswersLength) {
                keys.forEach(key => {
                    if (game?.type === 'quiz') {
                        const currentAnswer = game!.questions[+key].answers.filter(answer => answer.id === userAnswers[key])[0];
                        if (currentAnswer.correct) {
                            return count++;
                        }
                    }
                    if (game?.type === 'text') {
                        const currentAnswer = game!.questions[+key].answers.find(answer => answer.value.toLowerCase() === userAnswers[key].toLowerCase());
                        if (currentAnswer) {
                            count++;
                        }
                    }
                });
            }
            console.log("count: ", count);
        }
    };

    const changeShowCheck = () => {
        if (userAnswers !== undefined) {
            const questionsLength = game?.questions.length || 1;
            const keys = Object.keys(userAnswers);
            const notEmpty = keys.find(key => userAnswers[key] !== "");
            const currentAnswersLength = keys.length;
            if (questionsLength === currentAnswersLength && notEmpty) {
                setShowCheck(true);
            } else {
                setShowCheck(false);
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        const newAnswers = {...userAnswers};
        newAnswers![name] = value;

        setUserAnswers(newAnswers);
    };

    const renderContent = () => {
        if (renderAnswers) {
            switch (game!.type) {
                case "quiz":
                    return (
                        <MainGameComponent
                            game={game!}
                            userAnswers={userAnswers || ""}
                            showCheck={showCheck}

                            onChange={handleChange}
                            getResults={getResults}
                        />
                    );
                default:
                    return (
                        <MainGameComponent
                            game={game!}
                            userAnswers={userAnswers || ""}
                            showCheck={showCheck}

                            onChange={handleChange}
                            getResults={getResults}
                        />
                    );
            }
        }
    };

    return (
        <Box className={classes.root}>
            <Container className={classes.container} maxWidth="xl">
                {!isLoading && (
                    <>
                        {renderContent()}
                    </>
                )}
            </Container>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        height: "90%",
        minWidth: 0,
        position: "absolute",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        bottom: 0,
    },
    container: {
        '&.MuiContainer-root': {
            height: "100%",
        }
    }
})

export default Game;