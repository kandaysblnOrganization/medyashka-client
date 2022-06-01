import React, {FC} from 'react';
import Slider, {Settings} from "react-slick";
import {gamesCards} from "../../../../../constants/gamesCards";
import GameCard from "./GameCard";
import {
    ArrowBackIosNewRounded as PrevIcon,
    ArrowForwardIosRounded as NextIcon
} from '@mui/icons-material';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";

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
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextIcon color="primary"/>,
        prevArrow: <PrevIcon color="primary"/>
    };
    return (
        <Box className={classes.root}>
            <Slider {...settings}>
                {gamesCards.map(gameCard => (
                    <GameCard gameCard={gameCard}/>
                ))}
            </Slider>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        width: 300,
        height: "auto",
    },
    arrowIcon: {},
})

export default GamesInformation;