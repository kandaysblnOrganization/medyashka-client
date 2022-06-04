import React, {FC} from 'react';
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import {EffectCoverflow} from "swiper";
import {booksCards} from "../../../../../constants/booksCards";
import BookCard from "./BookCard";
import clsx from "clsx";
import {createUseStyles} from "react-jss";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface BooksInformationProps {
}

const BooksInformation: FC<BooksInformationProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className={clsx([classes.root])}
            >
                {booksCards.map(bookCard => (
                    <SwiperSlide className={classes.swiperSlide} key={bookCard.id}><BookCard
                        bookCard={bookCard}/></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

const useStyles = createUseStyles({
    root: {
        width: "100%",
    },
    swiperSlide: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: 520,
        "& .swiper-slide-shadow-left, .swiper-slide-shadow-right": {
            borderRadius: 37,
        },
        "& .swiper-slide-shadow-left": {
            backgroundImage: "linear-gradient(to left, rgba(68,63,84, 0.15), rgba(68,63,84, 0))",
        },
        "& .swiper-slide-shadow-right": {
            backgroundImage: "linear-gradient(to right, rgba(68,63,84, 0.15), rgba(68,63,84, 0))",
        }
    }
});

export default BooksInformation;