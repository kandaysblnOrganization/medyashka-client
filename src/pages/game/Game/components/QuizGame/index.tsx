import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, EffectFade, EffectFlip} from "swiper";
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import {IGameCard} from "../../../../../types/ContantsTypes";
import GameSlide from "./GameSlide";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import {ICardsJss} from "../../../../../types/JssProps";

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
    const StylesProps: ICardsJss = {
        backgroundColor1: game.color,
    }
    const classes = useStyles(StylesProps);

    return (
        <Box className={classes.root}>
            <Swiper
                effect={"flip"}
                allowTouchMove={false}
                pagination={{
                    clickable: true,
                }}
                flipEffect={{
                    slideShadows: false,
                }}
                modules={[EffectFlip, Pagination]}
                mousewheel={true}
                keyboard={true}
                className="mySwiper"
            >
                {questions.map((question, index) => (
                    <SwiperSlide key={question.question}>
                        <GameSlide
                            game={game}
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
    root: (props: ICardsJss) => ({
        width: "100%",
        height: 500,
        boxSizing: "border-box",
        "& *, *:after, *:before": {
            boxSizing: "border-box",
        },

        "& .swiper": {
            width: "100%",
            height: "100%",

            "& .swiper-wrapper": {
                "& .swiper-slide": {
                    userSelect: "none",
                },
            },

            "& .swiper-pagination": {
                bottom: 0,
                left: 0,
                textAlign: "left",

                "& .swiper-pagination-bullet": {
                    width: 50,
                    height: 50,
                    margin: "0 0 0 18px",
                    background: props.backgroundColor1,
                    opacity: .5,

                    "&:first-child": {
                        margin: 0,
                    },

                    '&.swiper-pagination-bullet-active': {
                        opacity: 1,
                    }
                },
            },
        }
    })
})

export default QuizGame;