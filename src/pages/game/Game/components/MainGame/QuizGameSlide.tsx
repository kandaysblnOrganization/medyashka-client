import React, {FC} from 'react';
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography,} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameCard, IGameQuestions} from "../../../../../types/ContantsTypes";
import {ICardsJss} from "../../../../../types/JssProps";

interface GameSlideProps {
    game: IGameCard;
    question: IGameQuestions;
    index: number;
    userAnswers: any;

    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const QuizGameSlide: FC<GameSlideProps> = (props) => {
    const {
        game,
        question,
        index,
        userAnswers,
        onChange
    } = props;
    const StylesProps: ICardsJss = {
        backgroundColor1: game.color,
    }
    const classes = useStyles(StylesProps);
    const {
        answers
    } = question;

    const getValue = () => {
        return userAnswers[String(index)] || "";
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.titleWrapper}>
                <Typography className={classes.title}>{question.question}</Typography>
            </Box>
            <Box className={classes.answersWrapper}>
                <FormControl>
                    <RadioGroup
                        value={getValue()}
                        name={index + ""}

                        onChange={(e) => onChange(e)}
                    >
                        {answers.map(answer => (
                            <FormControlLabel
                                classes={{
                                    root: classes.formControl,
                                    label: classes.label,
                                }}
                                key={answer.id}
                                value={answer.id}
                                control={<Radio size="medium" className={classes.radio}/>}
                                label={answer.value}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        height: "max-content",
        display: "flex",
        justifyContent: "space-between",
    },

    titleWrapper: {
        width: 480,
    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            fontSize: 68,
            lineHeight: "83px",
            color: "#425154",
        },
    },

    answersWrapper: {
        width: 500,
    },

    formControl: {
        "&.MuiFormControlLabel-root": {
            marginTop: 40,
            marginLeft: 0,
            marginRight: 0,
            "&:first-child": {
                marginTop: 0,
            }
        },
    },

    label: {
        "&.MuiTypography-root": {
            fontWeight: 500,
            fontSize: 36,
            lineHeight: "44px",
            color: "#000000",
            marginLeft: 16,
        },
    },

    radio: (props: ICardsJss) => ({
        '&.MuiRadio-root': {
            color: props.backgroundColor1,
            opacity: 0.5,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
            padding: 0,
            transition: "all .2s linear",

            "&.Mui-checked": {
                opacity: 1,
                color: props.backgroundColor1,
            },
        },
    })
});

export default QuizGameSlide;