import React, {FC} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {IBookCard} from "../../../../../types/ContantsTypes";
import {createUseStyles} from "react-jss";
import {IBookCardJss} from "../../../../../types/JssProps";

interface BookCardProps {
    bookCard: IBookCard;
}

const BookCard: FC<BookCardProps> = (props) => {
    const {
        bookCard
    } = props;
    const StylesProps: IBookCardJss = {
        backgroundColor1: bookCard.bookColor,
    }
    const classes = useStyles(StylesProps);
    return (
        <Box className={classes.root}>
            <Grid container flexDirection='column' alignItems='center'>
                <Grid item>
                    <Box className={classes.imageWrapper}>
                        <img className={classes.image} src={bookCard.bookCharacter} alt=""/>
                    </Box>
                </Grid>
                <Grid item mt={1.5}>
                    <Typography className={classes.bookNumber} variant="h2">{bookCard.bookNumber}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{bookCard.year}г.</Typography>
                </Grid>
                <Grid item mt={2.5}>
                    <Typography className={classes.title} variant="h4">{bookCard.title}</Typography>
                </Grid>
                <Grid item mt={2} className={classes.buttonWrapper}>
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.button}
                    >
                        Начать чтение
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        padding: 20,
        background: "#FFFFFF",
        boxShadow: "0px 4px 11px #E0CBC4",
        borderRadius: 37,
    },
    imageWrapper: {
        width: 356,
        height: 356,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    bookNumber: (props: IBookCardJss) => ({
        "&.MuiTypography-root": {
            color: props.backgroundColor1,
        }
    }),
    title: {
        "&.MuiTypography-root": {
            textAlign: "center",
            color: "#443F54",
        }
    },
    buttonWrapper:{
        "&.MuiGrid-root": {
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
        }
    },
    button: {
        "&.MuiButton-root": {
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

})

export default BookCard;