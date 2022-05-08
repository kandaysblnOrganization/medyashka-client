import React, {FC} from 'react';
import {Button, Container, Grid, IconButton} from "@mui/material";
import {
    MenuRounded as MenuIcon,
    LogoutRounded as LogOutIcon
} from '@mui/icons-material';

interface HeaderProps {
    isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
    const {
        isAuth
    } = props;
    return (
        <Container maxWidth="md">
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <IconButton color="primary">
                        <MenuIcon color="primary"/>
                    </IconButton>
                </Grid>
                {Boolean(isAuth) && (
                    <Grid item>
                        <Button
                            endIcon={<LogOutIcon/>}
                            variant="outlined"
                        >
                            Выход
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Header;