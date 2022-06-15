import React, {FC, useEffect} from 'react';
import {
    BooksInformation as BooksInformationComponent
} from './components';
import {Container} from "@mui/material";
import {createUseStyles} from "react-jss";
import {useActions} from "../../../hooks/redux/useActions";

const Books: FC = () => {
    const {
        getUserProgress
    } = useActions();

    useEffect(() => {
        (async () => {
            await getUserProgress();
        })();
    }, []);

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