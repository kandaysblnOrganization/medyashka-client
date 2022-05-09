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
import {
    HeaderBackground
} from '../../../../assets/images';
import clsx from "clsx";
import {useLocation} from "react-router-dom";

interface HeaderProps {
    isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
    const {
        isAuth,
    } = props;
    const classes = useStyles();
    const location = useLocation();
    return (
        <header
            className={clsx({
                [classes.mainPageHeader]: location.pathname === '/',
            })}
        >
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
                    {location.pathname === '/profile' && (
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
    mainPageHeader: {
        width: "100%",
        height: "100vh",
        background: `url(${HeaderBackground}) center no-repeat`,
        backgroundSize: "cover",
        position: "relative",
    }
})
export default Header;