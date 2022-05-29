import React, {createRef, FC, useRef} from 'react';
import {Button, Container, Grid} from "@mui/material";
import {DialogConfirmationComponent, MenuBurger} from "../../../../../../components";
import {LogoutRounded as LogOutIcon} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import {createUseStyles} from "react-jss";
import {useActions} from "../../../../../../hooks/redux/useActions";

interface HeaderActionsProps {
    isOpen: boolean;
    onSetOpen: () => void
}

const HeaderActions: FC<HeaderActionsProps> = (props) => {
    const {
        isOpen,

        onSetOpen
    } = props;
    const classes = useStyles();
    const location = useLocation();
    const refDialogConfirmation = useRef<any>(null);
    const {
        userLogout
    } = useActions();

    const handleUserLogout = (isConfirm?: boolean) => {
        if (!isConfirm) {
            if (refDialogConfirmation && refDialogConfirmation.current) {
                refDialogConfirmation.current.onOpen({
                    message: "Вы действительно хотите выйти из аккаунта?",
                    acceptButtonTitle: "Да, выйти",
                    cancelButtonTitle: "Нет",
                    acceptButtonAction: handleUserLogout.bind(this, true),
                })
            }

            return;
        }

        userLogout();
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Button
                            className={classes.headerButton}
                            color="secondary"
                            size="small"

                            onClick={onSetOpen}
                        >
                            <MenuBurger isOpenDrawer={isOpen}/>
                        </Button>
                    </Grid>
                    {location.pathname === '/profile' && (
                        <Grid item>
                            <Button
                                disableRipple
                                endIcon={<LogOutIcon/>}
                                className={classes.logoutButton}

                                onClick={() => handleUserLogout()}
                            >
                                Выйти
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Container>

            {location.pathname === '/profile' && (
                <DialogConfirmationComponent
                    ref={refDialogConfirmation}
                />
            )}
        </>
    );
};

const useStyles = createUseStyles({
    headerButton: {
        width: "50px",
        height: "50px",
        borderRadius: "100px",
    },

    logoutButton: {
        "&.MuiButton-root": {
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "15px",
            color: "#000000",

            "&:hover": {
                background: "none",
            }
        }
    }
})

export default HeaderActions;