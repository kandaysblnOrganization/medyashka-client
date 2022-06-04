import React, {FC} from 'react';
import {Container} from "@mui/material";
import {
    BooksInformation as BooksInformationComponent
} from './components';

interface MainProps {
}

const Main: FC<MainProps> = () => {
    return (
        <>
            <Container maxWidth="xl">
                <BooksInformationComponent/>
            </Container>
        </>
    );
};

export default Main;