import React, {FC} from 'react';
import {
    Box,
    Container
} from "@mui/material";
import {
    BooksInformation as BooksInformationComponent
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
        </>
    );
};

const useStyles = createUseStyles({
    sliderContent: {
    },
})

export default Main;