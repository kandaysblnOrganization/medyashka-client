import React, {FC} from 'react';
import {
    Box,
    Container
} from "@mui/material";
import {
    BooksInformation as BooksInformationComponent,
    CharactersInformation as CharactersInformationComponent
} from './components';
import {createUseStyles} from "react-jss";

interface MainProps {
}

const Main: FC<MainProps> = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl">
                <Box className={classes.sliderContent}>
                    <BooksInformationComponent/>
                </Box>
            </Container>
            <Box className={classes.charactersContent}>
                <Container maxWidth="xl">
                    <CharactersInformationComponent/>
                </Container>
            </Box>
        </>
    );
};

const useStyles = createUseStyles({
    sliderContent: {
        marginTop: 150,
    },
    charactersContent: {
        marginTop: 150,
        paddingTop: 50,
        paddingBottom: 50,
        background: "#6252B0",
    },
})

export default Main;