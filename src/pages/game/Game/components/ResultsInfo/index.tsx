import React, {FC, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameCard} from "../../../../../types/ContantsTypes";
import {ICardsJss} from "../../../../../types/JssProps";
import {Link} from "react-router-dom";

interface ResultsInfoProps {
    game: IGameCard;
    userAnswers: any;
    count: number;

    onReset: () => void
}

const ResultsInfo: FC<ResultsInfoProps> = (props) => {
    const {
        game,
        userAnswers,
        count,
        onReset
    } = props;
    const StylesProps: ICardsJss = {
        backgroundColor1: game.color,
    };
    const classes = useStyles(StylesProps);
    const {
        questions
    } = game;
    const [passed, setPassed] = useState(count === questions.length);

    const renderContent = () => {
        if (passed) {
            return (
                <>
                    <Typography className={classes.message}>
                        Все ответы правильные! Ты умница!
                    </Typography>
                    <Link to="../profile">
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Перейти в профиль
                        </Button>
                    </Link>
                </>
            );
        } else {
            return (
                <>
                    <Typography className={classes.message}>
                        Ты большой молодец! Но попробуй еще раз...
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}

                        onClick={onReset}
                    >
                        Начать заново
                    </Button>
                </>
            );
        }
    };
    const renderAnswers = () => {
        return questions.map((question, idxQ) => (
            <>
                <Box className={classes.questionWrapper}>
                    <Typography className={classes.questionTitle}>{question.question}</Typography>
                    {question.img && (
                        <Box className={classes.questionImageWrapper}>
                            <img className={classes.questionImage} src={question.img} alt={question.question}/>
                        </Box>
                    )}
                    {question.answers.map((answer, idxA) => (
                        <Typography>
                            {answer.value}
                        </Typography>
                    ))}
                </Box>
            </>
        ));
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.amountContent}>
                <Typography className={classes.title}>Твои результаты:</Typography>
                <Typography className={classes.label}>
                    {count} из {questions.length}
                </Typography>
                {renderContent()}
            </Box>
            <Box className={classes.amountContent}>
                <Typography className={classes.title}>Ответы:</Typography>
                <Box className={classes.questions}>
                    {renderAnswers()}
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    amountContent: {
        width: 500,
    },

    title: {
        "&.MuiTypography-root": {
            color: "#425154",
            fontWeight: 700,
            fontSize: 68,
            lineHeight: "83px",
        }
    },

    label: (props: ICardsJss) => ({
        "&.MuiTypography-root": {
            color: props.backgroundColor1,
            fontWeight: 700,
            fontSize: 128,
            lineHeight: "157px",
            marginTop: 64,
        }
    }),

    message: {
        "&.MuiTypography-root": {
            color: "#425154",
            fontWeight: 400,
            fontSize: 34,
            lineHeight: "41px",
            marginTop: 64
        },
    },

    button: (props: ICardsJss) => ({
        background: props.backgroundColor1,
        "&.MuiButton-root": {
            width: 300,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "uppercase",
            color: "#FFFFFF",
            background: props.backgroundColor1,
            marginTop: 64,

            "&:hover": {
                background: props.backgroundColor1,
            },
        },
    }),

    questions: {
        maxHeight: 600,
        overflow: "scroll",
        marginTop: 16,
    },
    questionWrapper: (props: ICardsJss) => ({
        padding: 20,
        border: `1px solid ${props.backgroundColor1}`,
        borderRadius: 14,
        marginTop: 24,

        "&:first-child": {
            marginTop: 0,
        }
    }),
    questionTitle: (props: ICardsJss) => ({
        '&.MuiTypography-root': {
            color: props.backgroundColor1,
            fontSize: 25,
            fontWeight: 500,
        },
    }),
    questionImageWrapper: {
        marginTop: 16,
        width: "100%",
        height: "100%",
    },
    questionImage: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
    },
});

export default ResultsInfo;