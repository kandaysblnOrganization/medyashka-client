import React, {FC} from 'react';
import {IBookCard} from "../../../../../types/ContantsTypes";
import {createUseStyles} from "react-jss";
import {Box, Button, Grid, Typography} from "@mui/material";
import {ICardsJss} from "../../../../../types/JssProps";

interface BooksCardProps {
    bookCard: IBookCard;
}

const BooksCard: FC<BooksCardProps> = (props) => {
    const {
        bookCard
    } = props;
    const StylesProps: ICardsJss = {
        backgroundColor1: bookCard.bookColor
    }
    const classes = useStyles(StylesProps);
    return (
        <Box className={classes.root}>
            <Grid container justifyContent="space-between">
                <Grid item xs={4}>
                    <Grid container flexDirection='column' height="100%" justifyContent="space-between">
                        <Grid item>
                            <Typography className={classes.title} variant="subtitle1">{bookCard.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.description}
                                variant="body1"
                            >
                                {bookCard.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box className={classes.buttonWrapper}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Начать чтение
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.imageContent} item xs={6}>
                    <Box className={classes.imageWrapper}>
                        <img className={classes.image} src={bookCard.bookCover} alt={bookCard.title}/>
                    </Box>
                </Grid>
                <Grid className={classes.numberContent} item xs>
                    <Grid container flexDirection='column'>
                        <Grid item>
                            <Typography className={classes.number} textAlign='right' variant="h1">{bookCard.id}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.year}>{bookCard.year}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        marginTop: 60,
    },
    title: (props: ICardsJss) => ({
        "&.MuiTypography-root": {
            color: props.backgroundColor1,
        }
    }),
    description: {
        "&.MuiTypography-root": {
            color: "#F2EFEE",
        }
    },
    number: (props: ICardsJss) => ({
        "&.MuiTypography-root": {
            color: props.backgroundColor1,
            marginBottom: 16,
        }
    }),
    year: {
        "&.MuiTypography-root": {
            color: "#F2EFEE",
            fontSize: 48,
            textAlign: "right",
        }
    },
    imageWrapper: {
        width: 557,
        height: 772,
        boxShadow: "0px 10px 28px #0D0B0B",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttonWrapper: {
        borderRadius: 25,
        position: "relative",
        border: "4px solid transparent",
        boxShadow: "-2px -2px 7px rgba(255, 232, 150, 0.58), 2px 2px 6px rgba(125, 90, 0, 0.83)",
        "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: -5,
            borderRadius: 25,
            background: `linear-gradient(to bottom right, #FFD15A, #C5801C)`,
            backgroundColor: "none",
        }
    },
    button: {
        "&.MuiButton-root": {
            zIndex: 1000,
            padding: "12px 36px",
            borderRadius: 25,
            fontWeight: 700,
            fontSize: 28,
            lineHeight: "34px",
            transition: "all .2s linear",
            "&:hover": {
                background: "#eaaa00",
            }
        }
    },

    imageContent: {
        display: "flex",
        justifyContent: "center",
    },
    numberContent: {
        display: "flex",
        justifyContent: "flex-end",
    }
});

export default BooksCard;