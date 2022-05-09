import React, {FC} from 'react';
import {
    Button,
    Container,
    Grid,
    IconButton
} from "@mui/material";
import {
    MenuRounded as MenuIcon,
    LogoutRounded as LogOutIcon
} from '@mui/icons-material';
import {MenuBurger} from "../../../../components";
import {createUseStyles} from "react-jss";

interface HeaderProps {
    isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
    const {
        isAuth
    } = props;
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Container maxWidth="xl">
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Button
                            sx={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "100px",
                            }}
                            color="secondary"
                            size="small"
                        >
                            <MenuBurger/>
                        </Button>
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
        </header>
    );
};

const useStyles = createUseStyles({
    header: {}
})

export default Header;