import React, {FC} from 'react';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";
import {FooterComponent, HeaderComponent} from "./components";
import {Outlet} from "react-router-dom";

interface LayoutProps {
    hasFooter: boolean;
    isAuth: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
    const {
        hasFooter,
        isAuth
    } = props;
    const classes = useStyles();
    return (
        <Box className={clsx({
            [classes.wrapper]: true,
        })}>
            <HeaderComponent isAuth={isAuth}/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            {Boolean(hasFooter) && (
                <FooterComponent/>
            )}
        </Box>
    );
};

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
    },
    main: {
        flex: "1 0 auto",
    }
})

export default Layout;