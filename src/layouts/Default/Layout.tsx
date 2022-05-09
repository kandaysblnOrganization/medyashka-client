import React, {FC} from 'react';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";
import {FooterComponent, HeaderComponent} from "./components";
import {Outlet, useLocation} from "react-router-dom";

interface LayoutProps {
}

const Layout: FC<LayoutProps> = (props) => {
    const classes = useStyles();
    const location = useLocation();
    console.log("location.pathname: ", location.pathname);
    return (
        <>
            <HeaderComponent/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            <FooterComponent/>
        </>
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