import React, {FC} from 'react';
import Slider, {Settings} from "react-slick";
import {gamesCards} from "../../../../../constants/gamesCards";
import GameCard from "./GameCard";
import {
    ExpandLessRounded as PrevIcon,
    ExpandMoreRounded as NextIcon
} from '@mui/icons-material';
import {Box, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";

interface GamesInformationProps {
}

const GamesInformation: FC<GamesInformationProps> = (props) => {
    const classes = useStyles();
    const settings: Settings = {
        arrows: true,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextIcon
            classes={{
                root: clsx([classes.arrowIcon, classes.nextIcon]),
            }}
            color="primary"
        />,
        prevArrow: <PrevIcon
            classes={{
                root: clsx([classes.arrowIcon, classes.prevIcon]),
            }}
            color="primary"
        />
    };
    return (
        <>
            <Typography classes={{root: classes.title}}>Игры</Typography>
            <Box className={classes.root}>
                <Slider {...settings}>
                    {gamesCards.map(gameCard => (
                        <GameCard gameCard={gameCard}/>
                    ))}
                </Slider>
            </Box>
        </>
    );
};

const useStyles = createUseStyles({
    root: {
        width: 300,
        height: "auto",
        marginTop: 40,
    },
    title: {
        "&.MuiTypography-root": {
            width: 300,
            fontWeight: 500,
            fontSize: 36,
            lineHeight: "44px",
            color: "#425154",
            textAlign: "center",
        }
    },
    arrowIcon: {
        "&.MuiSvgIcon-root": {
            width: 48,
            height: 48,
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            "& path": {
                transition: "all .2s linear",
                fill: "#6252B0",
            },
            "&:hover": {
                "& path": {
                    fill: "#F5B000",
                },
            }
        }
    },
    prevIcon: {
        top: "-10%",
    },
    nextIcon: {
        top: "98%",
    }
})

export default GamesInformation;