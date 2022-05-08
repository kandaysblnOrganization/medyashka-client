import React, {FC} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {SocialNavigateComponent} from "../index";

const MainInformation: FC = () => {
    return (
        <>
            <Container maxWidth="md">
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs>
                        <Typography
                            sx={{color: "#FF8A00",}}
                        >
                            Путешествуем с Медяшкой
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            sx={{color: "#EAEAEA"}}
                        >
                            © 2022, ДП Стамбеков Б.З.
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <SocialNavigateComponent/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MainInformation;