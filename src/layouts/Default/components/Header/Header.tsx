import React, {FC, useState} from 'react';
import {createUseStyles} from "react-jss";
import {
    HeaderBackground,
    FirstBookGameBG,
    FourthBookGameBG,
    SecondBookGameBG,
    ThirdBookGameBG
} from '../../../../assets/images';
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import {DialogActionsAccountComponent, HeaderActionsComponent, HeaderDrawerComponent} from "./components";
import {Backdrop, CircularProgress} from "@mui/material";

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
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenDrawer = () => {
        setIsOpenDrawer(true);
    }
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
    }

    const handleOpenDialog = () => {
        setIsOpenDialog(true);
    }
    const handleCloseDialog = () => {
        setIsOpenDialog(false);
    }

    const handleSetIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading);
    };
    return (
        <>
            <header
                className={clsx({
                    [classes.mainPageHeader]: location.pathname === '/',
                    [classes.firstBookGame]: location.pathname.split('/')[1] === 'first_book',
                    [classes.secondBookGame]: location.pathname.split('/')[1] === 'second_book',
                    [classes.thirdBookGame]: location.pathname.split('/')[1] === 'third_book',
                    [classes.fourthBookGame]: location.pathname.split('/')[1] === 'fourth_book',
                })}
            >
                <HeaderActionsComponent isOpen={isOpenDrawer} onSetOpen={handleOpenDrawer}/>
                <HeaderDrawerComponent
                    isOpenDrawer={isOpenDrawer}
                    isAuth={isAuth}

                    onCloseDrawer={handleCloseDrawer}
                    onOpenDialog={handleOpenDialog}
                />
            </header>

            <Backdrop open={isLoading}>
                <CircularProgress color="secondary" size={64}/>
            </Backdrop>

            <DialogActionsAccountComponent
                isOpen={isOpenDialog}

                onClose={handleCloseDialog}
                onSetIsLoading={handleSetIsLoading}
            />
        </>
    );
};

const useStyles = createUseStyles({
    mainPageHeader: {
        width: "100%",
        height: "100vh",
        background: `url(${HeaderBackground}) center no-repeat`,
        backgroundSize: "cover",
        position: "relative",
    },
    firstBookGame: {
        width: "100%",
        height: "100vh",
        background: `url(${FirstBookGameBG}) center no-repeat`,
        backgroundSize: "cover",
        position: "fixed",
        zIndex: 1,
    },
    secondBookGame: {
        width: "100%",
        height: "100vh",
        background: `url(${SecondBookGameBG}) center no-repeat`,
        backgroundSize: "cover",
        position: "relative",
    },
    thirdBookGame: {
        width: "100%",
        height: "100vh",
        background: `url(${ThirdBookGameBG}) center no-repeat`,
        backgroundSize: "cover",
        position: "relative",
    },
    fourthBookGame: {
        width: "100%",
        height: "100vh",
        background: `url(${FourthBookGameBG}) center no-repeat`,
        backgroundSize: "cover",
        position: "relative",
    },
})
export default Header;