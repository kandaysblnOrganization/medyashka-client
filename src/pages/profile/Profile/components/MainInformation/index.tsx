import React, {FC} from 'react';
import {IResponseUserImage, IResponseUserProgress} from "../../../../../types/ResponseTypes";
import {useTypedSelector} from "../../../../../hooks/redux/useTypedSelector";
import {Box, CircularProgress, Grid, IconButton, Typography} from "@mui/material";
import {
    AddAPhoto as AddIcon
} from "@mui/icons-material";
import {createUseStyles} from "react-jss";

interface MainInformationProps {
    userProgress: IResponseUserProgress;
    userImage: IResponseUserImage;
}

const MainInformation: FC<MainInformationProps> = (props) => {
    const {
        userImage,
        userProgress
    } = props;
    const {
        user
    } = useTypedSelector(state => state.user);
    const classes = useStyles();
    return (
        <Grid className={classes.root} container alignItems="center" justifyContent='space-between'>
            <Grid item>
                <Grid container flexDirection='column' rowSpacing={1}>
                    <Grid item>
                        <Typography className={classes.colorText}
                                    variant="h2">{user?.full_name || "Безымянный пользователь"}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.colorText}
                                    variant="h6">{user?.position || "Нет возраста"}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <UserImageComponent userImage={userImage} userProgress={userProgress}/>
            </Grid>
        </Grid>
    );
};

interface UserImageComponentProps {
    userImage: IResponseUserImage;
    userProgress: IResponseUserProgress;
}

const UserImageComponent: FC<UserImageComponentProps> = (props) => {
    const {
        userImage,
        userProgress
    } = props;
    const classes = useStyles();
    return (
        <>
            <Box className={classes.userProgressWrapper}>
                <CircularProgress
                    className={classes.progressBarTrack}
                    variant="determinate"
                    color="error"
                    size={340}
                    thickness={0.5}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    className={classes.progressBar}
                    size={350}
                    thickness={1.5}
                    variant="determinate"
                    value={userProgress.percent_progress}
                />
                <Box className={classes.userImageWrapper}>
                    <img className={classes.userImage} src={`${process.env.REACT_APP_API_URL}${userImage.avatar}`}
                         alt="user avatar"/>
                    <IconButton className={classes.iconWrapper} color="secondary">
                        <AddIcon className={classes.icon} color="secondary"/>
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

const useStyles = createUseStyles({
    root: {
        "&.MuiGrid-root": {
            width: "100%",
            height: "100%",
        }
    },
    colorText: {
        "&.MuiTypography-root": {
            color: "#443F54",
        }
    },
    userProgressWrapper: {
        width: 400,
        height: 400,
        position: "relative",
    },
    progressBar: {
        "&.MuiCircularProgress-root": {
            width: "400px !important",
            height: "400px !important",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-90deg) !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > svg": {
                width: "350px !important",
                height: "350px !important",
                "& > circle": {
                    filter: "drop-shadow(0.3px 0.3px 0.3px #FB8349)",
                    strokeLinecap: "round",
                    stroke: "#FB8349",
                    fill: "none",
                }
            }
        }
    },
    progressBarTrack: {
        "&.MuiCircularProgress-root": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-90deg) !important",
            "& > svg": {
                "& > circle": {
                    stroke: "#FFD1D1",
                }
            }
        }
    },

    iconWrapper: {
        "&.MuiButtonBase-root": {
            background: "#FFFFFF",
            position: "absolute",
            right: 35,
            bottom: 10,
            "&:hover": {
                background: "#FFFFFF",
            }
        }
    },
    icon: {
        "&.MuiSvgIcon-root": {
            width: 32,
            height: 32,
        }
    },
    userImageWrapper: {
        borderRadius: "100%",
        width: 280,
        height: 280,
        background: "#FFFFFF",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
    },
    userImage: {
        width: 280,
        height: 280,
        borderRadius: "100%",
        userSelect: "none",
    }
});

export default MainInformation;