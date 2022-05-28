import React, {FC, useEffect, useRef, useState} from 'react';
import {
    Button,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from "@mui/material";
import {createUseStyles} from "react-jss";
import {AccountActionsImage} from '../../../../../../assets/images';
import clsx from "clsx";
import {AuthFormComponent} from "../index";
import {IFormDataAuth} from "../../../../../../store/actions/userActions";
import {FormikProps} from "formik";
import {resetForm} from "../../../../../../helper/resetForm";

interface DialogActionsAccountProps {
    isOpen: boolean;

    onClose: () => void,
    onSetIsLoading: (isLoading: boolean) => void,
}

const initAuthVal: IFormDataAuth = {
    email: "",
    password: "",
};

let timeoutClose: ReturnType<typeof setTimeout>;
let timeoutReset: ReturnType<typeof setTimeout>;

const DialogActionsAccount: FC<DialogActionsAccountProps> = (props) => {
    const {
        isOpen,

        onClose,
        onSetIsLoading
    } = props;
    const classes = useStyles();
    const [mainContentActive, setMainContentActive] = useState(true);
    const [authContentActive, setAuthContentActive] = useState(false);
    const refFormik = useRef<FormikProps<IFormDataAuth>>(null);

    const handleOpenAuthContent = () => {
        setMainContentActive(false);
        setAuthContentActive(true);
    }

    const handleCloseAuthContent = () => {
        clearTimeout(timeoutClose);
        timeoutClose = setTimeout(() => {
            setAuthContentActive(false);
            setMainContentActive(true);
        }, 500);
    }

    const resetForms = () => {
        clearTimeout(timeoutReset);
        timeoutReset = setTimeout(() => {
            resetForm(refFormik, initAuthVal);
        }, 1000);
    };

    const handleClose = () => {
        resetForms();
        handleCloseAuthContent();
        onClose();
    }
    return (
        <>
            <Dialog
                classes={{
                    paper: classes.dialogContainer,
                }}
                fullWidth
                maxWidth="sm"
                open={isOpen}

                onClose={handleClose}
            >
                <DialogTitle
                    className={classes.dialogTitle}
                >
                    <Typography
                        className={classes.title}
                        variant="h4"
                    >
                        ПРИКЛЮЧЕНИЕ С МЕДЯШКОЙ
                    </Typography>
                </DialogTitle>
                <DialogContent className={clsx({
                    [classes.dialogContent]: true,
                    [classes.dialogContentActive]: mainContentActive,
                })}>
                    <Container className={classes.container} maxWidth="xs">
                        <Grid
                            className={classes.actionsWrapper}
                            container
                            alignItems="center"
                            textAlign="center"
                        >
                            <Grid item xs={12}>
                                <img height={240} src={AccountActionsImage} alt="Медяшка"/>
                            </Grid>
                            <Grid item container>
                                <Grid mb={4} item xs={12}>
                                    <Typography
                                        sx={{
                                            color: "#693900",
                                        }}
                                        variant="h6"
                                    >
                                        Что вы хотите сделать?
                                    </Typography>
                                </Grid>
                                <Grid mb={1.5} item xs={12}>
                                    <Button
                                        className={clsx({
                                            [classes.actionButton]: true,
                                        })}
                                        fullWidth
                                        variant="contained"
                                        color="secondary"

                                        onClick={handleOpenAuthContent}
                                    >
                                        Войти в аккаунт
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        className={clsx({
                                            [classes.actionButton]: true,
                                            [classes.registrationBtn]: true,
                                        })}
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Зарегистрироваться
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogContent className={clsx({
                    [classes.authContent]: true,
                    [classes.authContentActive]: authContentActive,
                })}>
                    <Container className={classes.container} maxWidth="xs">
                        <AuthFormComponent
                            refFormik={refFormik}
                            initAuthVal={initAuthVal}

                            onClose={handleClose}
                            onSetIsLoading={onSetIsLoading}
                        />
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
};

const useStyles = createUseStyles({
    container: {
        height: "100%",
    },
    dialogContainer: {
        "&.MuiPaper-root": {
            borderRadius: "20px",
            paddingTop: "10px",
        }
    },
    dialogTitle: {
        "&.MuiDialogTitle-root": {
            background: "none",
        }
    },
    dialogContent: {
        display: "none",
    },
    dialogContentActive: {
        display: "block",
    },
    actionsWrapper: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            color: "#000000 !important",
            textAlign: "center",
        }
    },
    closeIconButton: {
        "&.MuiButtonBase-root": {
            transition: "all .2s linear",
            "& .MuiSvgIcon-root": {
                fill: "#000000",
                transition: "all .2s linear",
                "& path": {
                    fill: "#000000",
                    transition: "all .2s linear",
                }
            },

            "&:hover": {
                transform: "rotate(-90deg)",
                "& .MuiSvgIcon-root": {
                    fill: "#FB8349",
                    "& path": {
                        fill: "#FB8349",
                    }
                },
            }
        }
    },

    actionButton: {
        "&.MuiButton-root": {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    },
    authorizationBtn: {},
    registrationBtn: {
        "&.MuiButton-root": {
            backgroundColor: "#FD659D",
        }
    },

    //AUTH CONTENT
    authContent: {
        display: "none",
    },
    authContentActive: {
        display: "block",
    }
})

export default DialogActionsAccount;