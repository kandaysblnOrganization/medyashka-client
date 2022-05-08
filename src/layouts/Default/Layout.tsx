import React, {FC} from 'react';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";

interface LayoutProps {
    hasFooter: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
    const {
        hasFooter
    } = props;
    const classes = useStyles();
    return (
        <Box className={clsx({
            [classes.wrapper]: true,
        })}>
        </Box>
    );
};

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
    }
})

export default Layout;