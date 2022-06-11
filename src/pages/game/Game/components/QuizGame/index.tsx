import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameCard} from "../../../../../types/ContantsTypes";
import GameSlide from "./GameSlide";

interface QuizGameProps {
    game: IGameCard;
    userAnswers: any;

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const QuizGame: FC<QuizGameProps> = (props) => {
    const {
        game,
        userAnswers,

        onChange
    } = props;
    const {
        questions
    } = game;
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {questions.map((question, index) => (
                    <SwiperSlide key={question.question}>
                        <GameSlide
                            question={question}
                            index={index}
                            userAnswers={userAnswers || ""}

                            onChange={onChange}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
        height: "100%",
        boxSizing: "border-box",

        "& *, *:after, *:before": {
            boxSizing: "border-box",
        },
    },
})

export default QuizGame;