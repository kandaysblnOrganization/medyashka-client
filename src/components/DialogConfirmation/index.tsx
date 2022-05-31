import React, {Component, Fragment, ReactElement} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import {Classes} from 'jss';
import clsx from "clsx";

interface DialogConfirmationProps {
}

interface DialogConfirmationState {
    open: boolean
    title: string
    message: string
    acceptButtonTitle: string
    cancelButtonTitle: string
    acceptButtonAction: () => void
    cancelButtonAction: () => void
}

interface DialogOnOpenProps {
    title?: "";
    message?: "";
    acceptButtonTitle?: "";
    cancelButtonTitle?: "";
    acceptButtonAction?: (a?: any, b?: any, c?: any, d?: any) => void;
    cancelButtonAction?: (a?: any, b?: any, c?: any, d?: any) => void;
}

class DialogConfirmation extends Component<DialogConfirmationProps, DialogConfirmationState> {
    constructor(props: DialogConfirmationProps) {
        super(props);

        this.state = {
            open: false,

            title: "",
            message: "",
            acceptButtonTitle: "",
            cancelButtonTitle: "",
            acceptButtonAction: () => this.onClose,
            cancelButtonAction: () => this.onClose,
        }
    }

    onOpen = (props: DialogOnOpenProps) => {
        this.setState({
            open: true,

            title: props.title || '',
            message: props.message || '',
            acceptButtonTitle: props.acceptButtonTitle || '',
            cancelButtonTitle: props.cancelButtonTitle || '',
            acceptButtonAction: props.acceptButtonAction || this.onClose,
            cancelButtonAction: props.cancelButtonAction || this.onClose,
        })
    };

    onClose = () => {
        this.setState({
            open: false
        })
    }


    onAccept = () => {
        this.setState({
            open: false
        });

        if (!this.state.acceptButtonAction) {
            return null
        }

        this.state.acceptButtonAction();
    }
    onCancel = () => {
        this.setState({
            open: false
        });

        if (!this.state.cancelButtonAction) {
            return null
        }

        this.state.cancelButtonAction();
    }


    render() {
        const {
            open,

            title,
            message,
            acceptButtonTitle,
            cancelButtonTitle
        } = this.state;

        return (
            <Styles styles={styles}>
                {classes => (
                    <Fragment>
                        <Dialog
                            classes={{
                                paper: classes.root,
                            }}
                            fullWidth
                            maxWidth="sm"
                            open={open}

                            onClose={this.onClose}
                        >
                            <DialogTitle className={classes.dialogTitle}>
                                <Typography
                                    className={classes.title}
                                    variant="h4"
                                >
                                    {message || "Вы действительно хотите это сделать?"}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Grid container flexDirection='column' rowSpacing={2.5} alignItems='center'>
                                    <Grid item xs={12} container flexDirection='column' rowSpacing={1}
                                          alignItems='center'>
                                        <Grid item width="100%" xs={8}>
                                            <Button
                                                className={clsx({
                                                    [classes.cancelButton]: true,
                                                })}
                                                fullWidth
                                                variant="contained"
                                                color="secondary"

                                                onClick={this.onCancel}
                                            >
                                                {cancelButtonTitle || "Нет"}
                                            </Button>
                                        </Grid>
                                        <Grid item width="100%" xs={8}>
                                            <Button
                                                className={clsx({
                                                    [classes.acceptButton]: true,
                                                })}
                                                fullWidth
                                                variant="contained"
                                                color="secondary"

                                                onClick={this.onAccept}
                                            >
                                                {acceptButtonTitle || "Да"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                        </Dialog>
                    </Fragment>
                )}
            </Styles>
        );
    }
}

export function createStyles(classes: { cancelButton: { background: string; fontSize: string; lineHeight: string; "&:hover": { color: string; background: string }; fontWeight: string; transition: string; textTransform: string }; root: { padding: string; borderRadius: string }; dialogTitle: { "&.MuiDialogTitle-root": { background: string } }; title: { "&.MuiTypography-root": { color: string; textAlign: string; fontWeight: number } }; acceptButton: { background: string; fontSize: string; lineHeight: string; "&:hover": { color: string; background: string }; fontWeight: string; transition: string; textTransform: string } }) {
    return createUseStyles(classes as any);
}

function Styles<T extends string | number | symbol>(props: { styles: () => Classes<T>, children: (classes: Classes<T>) => ReactElement }) {
    const classes = props.styles();
    return props.children(classes);
}

const styles = createStyles({
    root: {
        borderRadius: "20px !important",
        padding: "20px 0",
    },

    title: {
        "&.MuiTypography-root": {
            fontWeight: 700,
            color: "#000000 !important",
            textAlign: "center",
        }
    },

    dialogTitle: {
        "&.MuiDialogTitle-root": {
            background: "none",
        }
    },

    acceptButton: {
        fontWeight: "700 !important",
        fontSize: "18px !important",
        lineHeight: "22px !important",
        transition: "all .2s linear !important",
        textTransform: "none !important",
        background: "#FFC0A2 !important",
        "&:hover": {
            background: "#FFB800 !important",
            color: "rgba(75, 0, 0, 0.92) !important",
        }
    },

    cancelButton: {
        fontWeight: "700 !important",
        fontSize: "18px !important",
        lineHeight: "22px !important",
        transition: "all .2s linear !important",
        textTransform: "none !important",
        background: "#FD659D !important",
        "&:hover": {
            background: "#FFB800 !important",
            color: "rgba(75, 0, 0, 0.92) !important",
        }
    }
})

export default DialogConfirmation;