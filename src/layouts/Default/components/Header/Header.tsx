import React, {FC, useState} from 'react';
import {createUseStyles} from "react-jss";
import {HeaderBackground} from '../../../../assets/images';
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import {HeaderActionsComponent, HeaderDrawerComponent} from "./components";

interface HeaderProps {
    isAuth: boolean;
}

const Header: FC<HeaderProps> = (props) => {
    const {
        isAuth
    } = props;
    const classes = useStyles();
    const location = useLocation();
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const handleOpenDrawer = () => {
        setIsOpenDrawer(true);
    }
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
    }
    return (
        <header
            className={clsx({
                [classes.mainPageHeader]: location.pathname === '/',
            })}
        >
            <HeaderActionsComponent onSetOpen={handleOpenDrawer}/>
            <HeaderDrawerComponent isOpen={isOpenDrawer} isAuth={isAuth} onClose={handleCloseDrawer}/>
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