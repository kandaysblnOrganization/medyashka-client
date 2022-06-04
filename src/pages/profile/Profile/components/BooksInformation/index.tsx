import React, {FC} from 'react';
import {Grid} from "@mui/material";
import {IResponseUserProgress} from "../../../../../types/ResponseTypes";
import {booksCards} from "../../../../../constants/booksCards";
import BookCard from "./BookCard";

interface BooksInformationProps {
    userProgress: IResponseUserProgress;
}

const BooksInformation: FC<BooksInformationProps> = (props) => {
    const {
        userProgress
    } = props;
    return (
        <Grid container alignItems='center' columnSpacing={3}>
            {booksCards.map(bookCard => (
                <Grid item key={bookCard.id}>
                    <BookCard bookCard={bookCard} userProgress={userProgress}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default BooksInformation;