import React, {FC} from 'react';
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import {
    EffectFlip,
    Pagination
} from "swiper";
import {
    Box,
    Button,
    Tooltip
} from "@mui/material";
import {
    createUseStyles
} from "react-jss";
import {
    IGameCard
} from "../../../../../types/ContantsTypes";
import QuizGameSlide from "./QuizGameSlide";
import {
    ICardsJss
} from "../../../../../types/JssProps";
import TextGameSlide from "./TextGameSlide";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import clsx from "clsx";

interface QuizGameProps {
    game: IGameCard;
    userAnswers: any;
    showCheck: boolean;


    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    getResults: () => void
}

const MainGame: FC<QuizGameProps> = (props) => {
    const {
        game,
        userAnswers,
        showCheck,

        onChange,
        getResults
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
                {game.type === "quiz"
                    ? (
                        <>
                            {questions.map((question, index) => (
                                <SwiperSlide key={question.question}>
                                    <QuizGameSlide
                                        game={game}
                                        question={question}
                                        index={index}
                                        userAnswers={userAnswers || ""}

                                        onChange={onChange}
                                    />
                                </SwiperSlide>
                            ))}
                        </>
                    )
                    : (
                        <>
                            {questions.map((question, index) => (
                                <SwiperSlide key={question.question}>
                                    <TextGameSlide
                                        game={game}
                                        question={question}
                                        index={index}
                                        userAnswers={userAnswers || ""}

                                        onChange={onChange}
                                    />
                                </SwiperSlide>
                            ))}
                        </>
                    )
                }
            </Swiper>
            {Boolean(!showCheck)
                ? (
                    <Tooltip title="Вы не ответили на все вопросы" placement="top" followCursor arrow>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.buttonDisabled}
                        >
                            Проверить
                        </Button>
                    </Tooltip>
                )
                : (
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        disabled={!showCheck}
                        className={classes.button}

                        onClick={getResults}
                    >
                        Проверить
                    </Button>
                )
            }
        </Box>
    );
};

const useStyles = createUseStyles({
    root: (props: ICardsJss) => ({
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        "& *, *:after, *:before": {
            boxSizing: "border-box",
        },

        "& .swiper": {
            width: "100%",
            height: "100%",

            "& .swiper-wrapper": {
                "& .swiper-slide": {
                    userSelect: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                },
            },

            "& .swiper-pagination": {
                bottom: 50,
                left: 0,
                textAlign: "left",
                width: "max-content",

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
    }),

    button: (props: ICardsJss) => ({
        background: props.backgroundColor1,
        "&.MuiButton-root": {
            width: 300,
            position: "absolute",
            bottom: 50,
            right: 0,
            zIndex: 1500,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "uppercase",
            color: "#FFFFFF",
            background: props.backgroundColor1,

            "&:hover": {
                background: props.backgroundColor1,
            },
        },
    }),

    buttonDisabled: {
        "&.MuiButton-root": {
            cursor: "default",
            color: "rgba(0, 0, 0, 0.26)",
            background: "rgba(0, 0, 0, 0.12)",
            boxShadow: "none",
            width: 300,
            position: "absolute",
            bottom: 50,
            right: 0,
            zIndex: 1500,
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "uppercase",

            "&:hover": {
                color: "rgba(0, 0, 0, 0.26)",
                background: "rgba(0, 0, 0, 0.12)",
                boxShadow: "none",
            },
        },
    },
})

export default MainGame;