import React, {FC} from 'react';
import {IGameCard, IGameQuestions} from "../../../../../types/ContantsTypes";
import {createUseStyles} from "react-jss";
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {ICardsJss} from "../../../../../types/JssProps";

interface TextGameSlideProps {
    game: IGameCard;
    question: IGameQuestions;
    index: number;
    userAnswers: any;

    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TextGameSlide: FC<TextGameSlideProps> = (props) => {
    const {
        game,
        question,
        index,
        userAnswers,

        onChange
    } = props;
    const StylesProps: ICardsJss = {
        backgroundColor1: game.color,
        backgroundColor2: game.colorOpacity,
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
                <Box className={classes.imageWrapper}>
                    <img className={classes.image} src={question.img} alt={question.question}/>
                </Box>
                <TextField
                    className={classes.textField}
                    variant="filled"
                    size="medium"
                    fullWidth
                    color="secondary"
                    label={getValue() === "" ? "Введите ответ" : "Ваш ответ"}
                    value={getValue()}
                    name={index + ""}

                    onChange={(e) => onChange(e)}
                />
            </Box>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20%",
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

    imageWrapper: {
        width: "100%",
        maxHeight: 500,
        textAlign: "center",
        marginBottom: 16,
    },

    image: (props: ICardsJss) => ({
        width: "100%",
        maxHeight: 500,
        objectFit: "fill",
        borderRadius: 15,
        border: `5px solid ${props.backgroundColor1}`,
    }),

    answersWrapper: {
        width: 500,
    },

    textField: (props: ICardsJss) => (
        {
            "& .MuiFilledInput-root": {
                background: props.backgroundColor2,
                "&.Mui-focused": {
                    background: props.backgroundColor2,
                },

                "&.Mui-focused:after": {
                    borderBottom: `2px solid ${props.backgroundColor1}`,
                },

                "&:hover": {
                    background: props.backgroundColor2,
                }
            },
            "& .MuiInputLabel-root": {
                color: "#000000",
                fontSize: 18,

                "&.Mui-focused": {
                    color: props.backgroundColor1,
                },
            },
            "& .MuiFilledInput-input": {
                fontSize: 18,
            },
            '& .MuiFormHelperText-root': {
                fontSize: 16,
            }
        }
    ),
});

export default TextGameSlide;