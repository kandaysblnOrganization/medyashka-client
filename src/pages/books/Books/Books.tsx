import React, {FC} from 'react';
import {
    BooksInformation as BooksInformationComponent
} from './components';
import {Container} from "@mui/material";
import {createUseStyles} from "react-jss";

const Books: FC = () => {
    useStyles();
    return (
        <>
            <Container maxWidth="xl">
                <BooksInformationComponent/>
            </Container>
        </>
    );
};

const useStyles = createUseStyles({
    "@global": {
        body: {
            background: "#282A37",
        }
    }
})

export default Books;