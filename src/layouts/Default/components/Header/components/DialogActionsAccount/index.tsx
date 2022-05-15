import React, {FC} from 'react';
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

interface DialogActionsAccountProps {
    isOpen: boolean;

    onClose: () => void
}

const DialogActionsAccount: FC<DialogActionsAccountProps> = (props) => {
    const {
        isOpen,

        onClose
    } = props;
    const classes = useStyles();

    return (
        <>
            <Dialog
                classes={{
                    paper: classes.dialogContainer,
                }}
                fullWidth
                maxWidth="sm"
                open={isOpen}

                onClose={onClose}
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
                <DialogContent>
                    <Container maxWidth="xs">
                        <Grid
                            container
                            alignItems="center"
                            textAlign="center"
                        >
                            <Grid mb={10} item xs={12}>
                                <img src={AccountActionsImage} alt="Медяшка"/>
                            </Grid>
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
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
};

const useStyles = createUseStyles({
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
    }
})

export default DialogActionsAccount;