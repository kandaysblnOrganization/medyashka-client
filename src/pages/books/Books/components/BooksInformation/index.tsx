import React, {FC, ReactNode} from 'react';
import {Box} from "@mui/material";
import Slider, {Settings} from "react-slick";
import {createUseStyles} from "react-jss";


interface BooksInformationProps {
}

interface CustomDotsProps {
    dots?: ReactNode;
}

const BooksInformation: FC<BooksInformationProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    const settings: Settings = {
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 300,
        appendDots: dots => <CustomDots dots={dots}/>,
    };
    return (
        <Box className={classes.root}>
            <Slider {...settings}>
                <Box>1234</Box>
            </Slider>
        </Box>
    );
};

const CustomDots: FC<CustomDotsProps> = (props) => {
    const {
        dots
    } = props;
    const classes = useStyles();
    return (
        <Box className={classes.dotWrapper}>
            <ul className={classes.dotList}>
                {dots}
            </ul>
        </Box>
    );
}

const useStyles = createUseStyles({
    root: {
        minHeight: "100vh",
    },

    dotWrapper: {
        display: "flex",
        justifyContent: "flex-end",
    },
    dotList: {
        display: 'flex',
        "& li": {
            width: 50,
            height: 50,
            marginRight: 25,
            transition: "all .2s linear",
            borderRadius: "100%",
            position: "relative",
            border: "2px solid transparent",
            marginLeft: "auto",
            "&:before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: -5,
                borderRadius: "100%",
                background: `linear-gradient(to bottom right, #FFE896, #745300)`,
                backgroundColor: "none",
                zIndex: -1,
            },
            "& button": {
                width: 50,
                height: 50,
                border: "none",
                background: "#E9AC05",
                boxShadow: "2px 2px 7px #A73C01, -2px -2px 5px rgba(255, 198, 53, 0.63)",
                borderRadius: "100%",
                fontWeight: 700,
                fontSize: 18,
                lineHeight: "22px",
                color: "#282A37",
                fontFamily: 'Montserrat Alternates',
                transition: "all .2s linear",
                cursor: "pointer",

                "&:hover": {
                    background: "#ce9900",
                }
            },

            "&:last-child": {
                marginRight: 0,
            }
        },
        "& li.slick-active": {
            "& button": {
                color: "#AB0A00",
            }
        }
    }
});

export default BooksInformation;