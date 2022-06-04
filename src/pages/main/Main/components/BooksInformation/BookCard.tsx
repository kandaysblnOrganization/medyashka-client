import React, {FC} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {IBookCard} from "../../../../../types/ContantsTypes";
import {createUseStyles} from "react-jss";

interface BookCardProps {
    bookCard: IBookCard;
}

const BookCard: FC<BookCardProps> = (props) => {
    const {
        bookCard
    } = props;
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container flexDirection='column' alignItems='center'>
                <Grid item>
                    <img src={bookCard.bookCharacter} alt=""/>
                </Grid>
                <Grid item>
                    <Typography>{bookCard.bookNumber}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{bookCard.year}г.</Typography>
                </Grid>
                <Grid item>
                    <Typography>{bookCard.title}</Typography>
                </Grid>
                <Grid item>
                    <Button>
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
})

export default BookCard;