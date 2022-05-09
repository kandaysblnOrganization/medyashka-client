import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {HeaderBackground} from '../../../../assets/images';
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import {HeaderActionsComponent} from "./components";

interface HeaderProps {
}

const Header: FC<HeaderProps> = (props) => {
    const {
    } = props;
    const classes = useStyles();
    const location = useLocation();
    return (
        <header
            className={clsx({
                [classes.mainPageHeader]: location.pathname === '/',
            })}
        >
            <HeaderActionsComponent/>
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