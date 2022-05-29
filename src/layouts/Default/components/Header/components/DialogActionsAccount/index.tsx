import React, {FC, useRef, useState} from 'react';
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
import {
    AuthFormComponent,
    RegFormComponent
} from "../index";
import {FormikProps} from "formik";
import {
    IFormDataAuth,
    IFormDataReg
} from "../../../../../../types/FormikTypes";

interface DialogActionsAccountProps {
    isOpen: boolean;

    onClose: () => void,
    onSetIsLoading: (isLoading: boolean) => void,
}

const initAuthVal: IFormDataAuth = {
    email: "",
    password: "",
};

const initRegVal: IFormDataReg = {
    email: "",
    password: "",
    position: "",
    full_name: "",
}

let timeoutClose: ReturnType<typeof setTimeout>;

const DialogActionsAccount: FC<DialogActionsAccountProps> = (props) => {
    const {
        isOpen,

        onClose,
        onSetIsLoading
    } = props;
    const classes = useStyles();
    const [mainContentActive, setMainContentActive] = useState(true);
    const [authContentActive, setAuthContentActive] = useState(false);
    const [regContentActive, setRegContentActive] = useState(false);
    const [activeRegStep, setActiveRegStep] = useState(0);
    const refAuthForm = useRef<FormikProps<IFormDataAuth>>(null);
    const refRegForm = useRef<FormikProps<IFormDataReg>>(null);

    const handleOpenAuthContent = () => {
        setMainContentActive(false);
        setAuthContentActive(true);
    }
    const handleOpenRegContent = () => {
        setMainContentActive(false);
        setRegContentActive(true);
    }

    const handleNext = () => {
        setActiveRegStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveRegStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCloseContent = () => {
        clearTimeout(timeoutClose);
        timeoutClose = setTimeout(() => {
            setActiveRegStep(0);
            setAuthContentActive(false);
            setRegContentActive(false);
            setMainContentActive(true);
        }, 500);
    }

    const handleClose = () => {
        handleCloseContent();
        onClose();
    }

    const renderDialogTitle = () => {
        if (mainContentActive) {
            return "Приключение с Медяшкой"
        }
        if (authContentActive) {
            return "Авторизация";
        }
        if (regContentActive) {
            return "Регистрация";
        }
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
                        {renderDialogTitle()}
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

                                        onClick={handleOpenRegContent}
                                    >
                                        Зарегистрироваться
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                {authContentActive && (
                    <DialogContent className={clsx({
                        [classes.authContent]: true,
                    })}>
                        <Container className={classes.container} maxWidth="xs">
                            <AuthFormComponent
                                refFormik={refAuthForm}
                                initAuthVal={initAuthVal}

                                onClose={handleClose}
                                onSetIsLoading={onSetIsLoading}
                            />
                        </Container>
                    </DialogContent>
                )}
                {regContentActive && (
                    <DialogContent className={clsx({
                        [classes.regContent]: true,
                    })}>
                        <Container className={classes.container} maxWidth="xs">
                            <RegFormComponent
                                initRegVal={initRegVal}
                                refFormik={refRegForm}
                                activeRegStep={activeRegStep}

                                onClose={handleClose}
                                onSetIsLoading={onSetIsLoading}
                                onNext={handleNext}
                                onBack={handleBack}
                            />
                        </Container>
                    </DialogContent>
                )}
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
        display: "block",
    },

    regContent: {
        display: "block",
    },
})

export default DialogActionsAccount;