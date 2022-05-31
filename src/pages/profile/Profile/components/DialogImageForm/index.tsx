import React, {FC, useState} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import clsx from "clsx";
import {createUseStyles} from "react-jss";
import {CropperComponent} from "../../../../../components";

interface DialogImageFormProps {
    isOpen: boolean;

    onClose: () => void
    onChangeImage: (image: any, isConfirm?: boolean) => void
}

let timeout: ReturnType<typeof setTimeout>;

const DialogImageForm: FC<DialogImageFormProps> = (props) => {
    const {
        isOpen,

        onClose,
        onChangeImage
    } = props;
    const classes = useStyles();
    const [image, setImage] = useState<any>(null);
    const [cropper, setCropper] = useState<Cropper>();

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event?.target.files?.[0] || null;
        if (file !== null) {
            let file_id = {
                file,
                source: "",
            };
            file_id.source = URL.createObjectURL(file);
            setImage(file_id);
        }
    };
    const handleSave = async () => {
        if (cropper) {
            if (typeof cropper.getCroppedCanvas() === "undefined") {
                return;
            }
            const formData = new FormData();
            cropper.getCroppedCanvas().toBlob((blob) => {
                if (blob !== null) {
                    formData.append('avatar', blob, 'avatar.jpg');
                }
            });
            await onChangeImage(formData);
            handleClose();
        }
    };


    const handleClose = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setImage(null);
        }, 500);
        onClose();
    }

    return (
        <Dialog
            classes={{
                paper: classes.root,
            }}
            fullWidth
            maxWidth={image !== null ? "md" : "xs"}
            open={isOpen}

            onClose={handleClose}
        >
            <DialogTitle className={classes.dialogTitle}>
                <Typography
                    className={classes.title}
                    variant="h4"
                >
                    Загрузка новой фотографии
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Grid container flexDirection='column' alignItems='center' rowSpacing={2.5}>
                    <Grid item>
                        {image === null
                            ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={clsx({
                                        [classes.button]: true,
                                        [classes.buttonNotActive]: true,
                                    })}
                                >
                                    <label className={clsx({
                                        [classes.photoLabel]: true,
                                    })}>
                                        <PhotoCamera sx={{marginRight: 1}}/>
                                        Выберите изображение
                                        <input
                                            accept="image/*"
                                            width="100%"
                                            type="file"
                                            hidden

                                            onChange={(e) => handleChangeFile(e)}
                                        />
                                    </label>
                                </Button>
                            )
                            : (
                                <CropperComponent newImage={image.source || ''} setCropper={setCropper}/>
                            )
                        }
                    </Grid>
                    {image !== null && (
                        <Grid item container>
                            <Grid item xs mr="8px">
                                <Button
                                    className={clsx({
                                        [classes.cancelButton]: true,
                                    })}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"

                                    onClick={handleClose}
                                >
                                    Отменить
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    className={clsx({
                                        [classes.acceptButton]: true,
                                    })}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"

                                    onClick={handleSave}
                                >
                                    Загрузить
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

const useStyles = createUseStyles({
    root: {
        "&.MuiPaper-root": {
            borderRadius: "14px",
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
    button: {
        margin: '20px 0 0 0',
    },
    buttonNotActive: {
        "&.MuiButton-root": {
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            borderRadius: 8,
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    },
    photoLabel: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    acceptButton: {
        "&.MuiButton-root": {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    },
    cancelButton: {
        "&.MuiButton-root": {
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            background: "#FD659D",
            "&:hover": {
                background: "#FFB800",
                color: "rgba(75, 0, 0, 0.92)",
            },
        }
    }
})

export default DialogImageForm;