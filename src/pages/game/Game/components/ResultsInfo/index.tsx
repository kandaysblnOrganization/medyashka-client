import React, {FC, useState} from 'react';
import {
    Box,
    Button,
    Typography
} from "@mui/material";
import {
    CheckRounded as CorrectIcon,
    CloseRounded as IncorrectIcon
} from '@mui/icons-material';
import {
    createUseStyles
} from "react-jss";
import {
    IGameCard, IGameQuestions
} from "../../../../../types/ContantsTypes";
import {
    ICardsJss
} from "../../../../../types/JssProps";
import {
    Link
} from "react-router-dom";
import clsx from "clsx";

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
                    <Box className={classes.answersWrapper}>
                        {question.answers.map((answer, idxA) => (
                            <Box className={classes.answerWrapper}>
                                <Typography className={clsx({
                                    [classes.answerValue]: true,
                                    [classes.correctValue]: answer.correct,
                                })}>
                                    {answer.value}
                                </Typography>
                                {answer.correct && (
                                    <CorrectIcon className={classes.correctIcon}/>
                                )}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.userAnswerBlock}>
                        <Typography className={classes.userAnswerTitle}>Ваш ответ:</Typography>
                        <Box className={classes.userAnswerWrapper}>
                            <Typography className={clsx({
                                [classes.answerValue]: true,
                                [classes.correctValue]: checkCorrectUserAnswer(question, idxQ),
                                [classes.incorrectValue]: !checkCorrectUserAnswer(question, idxQ)
                            })}>{getUserAnswer(question, idxQ)}</Typography>
                            {checkCorrectUserAnswer(question, idxQ)
                                ? (
                                    <CorrectIcon className={classes.correctIcon}/>
                                )
                                : (
                                    <IncorrectIcon className={classes.incorrectIcon}/>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
            </>
        ));
    };

    const getUserAnswer = (question: IGameQuestions, idx: number) => {
        if (game.type === "quiz") {
            const answer = question.answers.filter(answer => answer.id === userAnswers[idx])[0];
            return answer.value;
        }
        if (game.type === 'text') {
            return userAnswers[idx];
        }
    };
    const checkCorrectUserAnswer = (question: IGameQuestions, idx: number) => {
        if (game.type === 'quiz') {
            const answer = question.answers.filter(answer => answer.id === userAnswers[idx])[0];
            if (answer) {
                return answer.correct;
            } else {
                return false;
            }
        }
        if (game.type === 'text') {
            const currentAnswer = question.answers.find(answer => answer.value.toLowerCase() === userAnswers[idx].toLowerCase());
            if (currentAnswer) {
                return currentAnswer;
            } else {
                return false;
            }
        }
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

    questions: (props: ICardsJss) => ({
        maxHeight: 600,
        overflowY: "scroll",
        marginTop: 16,
        paddingRight: 10,

        "&::-webkit-scrollbar": {
            width: 5,
        },
        "&::-webkit-scrollbar-track": {
            margin: "10px 0",
        },
        "&::-webkit-scrollbar-thumb": {
            background: props.backgroundColor1,
            borderRadius: 999,
        },
    }),
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

    answersWrapper: {},
    answerWrapper: {
        display: "flex",
        alignItems: "center",
        marginTop: 12,
        "&:first-child": {
            marginTop: 16,
        }
    },
    answerValue: {
        "&.MuiTypography-root": {
            fontWeight: 400,
            fontSize: 20,
            textDecorationLine: "line-through",
            color: "#425154",
            opacity: .4,
        },
    },
    correctIcon: {
        marginLeft: 8,
        "&.MuiSvgIcon-root": {
            width: 22,
            height: 22,
            "& > path": {
                fill: "#91AC00",
            },
        },
    },
    incorrectIcon: {
        marginLeft: 8,
        "&.MuiSvgIcon-root": {
            width: 22,
            height: 22,
            "& > path": {
                fill: "#E43333",
            },
        },
    },
    correctValue: {
        "&.MuiTypography-root": {
            textDecorationLine: "none",
            color: "#91AC00",
            opacity: 1,
        },
    },
    incorrectValue: {
        "&.MuiTypography-root": {
            textDecorationLine: "none",
            color: "#E43333",
            opacity: 1,
        },
    },

    userAnswerBlock: {
        marginTop: 24,
    },
    userAnswerWrapper: {
        display: "flex",
        alignItems: 'center',
        marginTop: 8,
    },
    userAnswerTitle: {
        "&.MuiTypography-root": {
            fontSize: 20,
        },
    },
});

export default ResultsInfo;