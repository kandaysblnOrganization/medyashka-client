import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import clsx from "clsx";
import {MainInformationComponent} from "./components";

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <footer className={clsx({
            [classes.footer]: true
        })}>
            <MainInformationComponent/>
        </footer>
    );
};

const useStyles = createUseStyles({
    footer: {
        flex: "0 0 auto",
        padding: "20px 0",
        backgroundColor: "#443F54",
    }
})

export default Footer