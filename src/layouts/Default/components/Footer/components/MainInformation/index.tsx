import React, {FC} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {SocialNavigateComponent} from "../index";

const MainInformation: FC = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#FF8A00",
                                textTransform: "uppercase"
                            }}
                        >
                            Путешествуем с Медяшкой
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#EAEAEA",
                                textAlign: "center",
                            }}
                        >
                            © 2022, ДП Стамбеков Б.З.
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#EAEAEA",
                                textAlign: "right",
                            }}
                        >
                            По книгам Елены Назаровой
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MainInformation;