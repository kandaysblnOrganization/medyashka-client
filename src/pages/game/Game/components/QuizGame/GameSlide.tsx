import React, {FC} from 'react';
import {
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameQuestions} from "../../../../../types/ContantsTypes";

interface GameSlideProps {
    question: IGameQuestions;
    index: number;
    userAnswers: any;

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const GameSlide: FC<GameSlideProps> = (props) => {
    const {
        question,
        index,
        userAnswers,
        onChange
    } = props;
    const classes = useStyles();
    const {
        answers
    } = question;

    const getAnswer = () => {
        return userAnswers[String(index)] || "";
    };
    return (
        <Box className={classes.root}>
            <Box>
                <Typography>{question.question}</Typography>
            </Box>
            <Box>
                <FormControl>
                    <RadioGroup
                        value={getAnswer()}
                        name={index + ""}

                        onChange={(e) => onChange(e)}
                    >
                        {answers.map(answer => (
                            <FormControlLabel
                                key={answer.id}
                                value={answer.id}
                                control={<Radio/>}
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
        height: "100%",
    },
});

export default GameSlide;